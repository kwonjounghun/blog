const path = require('path');
const lodash = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');
const firebase = require('firebase');
const dotenv = require('dotenv');

dotenv.config();

let postListJson = {};

// postList.json 파일에서 이전 데이터 리스트를 불러오는 로직
fs.stat(`${__dirname}/src/data/postList.json`, error => {
	if (error) {
		return fs.writeFile(`${__dirname}/src/data/postList.json`, '{}', (writeError) => {
			if (writeError) {
				throw writeError;
			}
			console.log('Replaced!');
		})
	}

	postListJson = fs.readFileSync(`${__dirname}/src/data/postList.json`, (readError) => {
		if (readError) {
			throw readError;
		}
	})
});

const updateJson = (newPostListJson) => {
	fs.writeFile(`${__dirname}/src/data/postList.json`, JSON.stringify(newPostListJson), (writeError) => {
		if (writeError) {
			throw writeError;
		}
		console.log('Replaced!');
	})
}

firebase.initializeApp({
	apiKey: process.env.FIREBASE_API_KEY,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
	projectId: process.env.FIREBASE_PROJECT_ID,
});

const database = firebase.database();


const updatePost = async (post) => {
	const updates = {};
	updates['/postList/' + post.postId] = {
		...post,
	}
	return database.ref().update(updates);
}

// firebase에 데이터 넣는 로직
const insertPost = async (post) => {
	return database.ref('/postList/' + post.postId).set({...post});
}

// graphql을 이용해 현재 작성된 post data를 가져오는 로직
const getAllPostList = async (graphql) => {
	const collections = await graphql(`
    query loadPagesQuery {
      allMarkdownRemark {
        edges {
          node {
						id
						excerpt
            frontmatter {
							postId
              title
							collection
							private
							date
							updateTime
							Thumbnail
							category
							description
            }
          }
        }
      }
    }
  `).then(result => {
		if (result.errors) {
			throw result.errors
		}

		// Create blog post pages.
		const collections = lodash.map(result.data.allMarkdownRemark.edges, 'node');
		const data = collections.map(item => {
			return {
				id: item.id,
				excerpt: item.excerpt,
				...item.frontmatter,
			}
		});
		return data;
	});

	return collections;
}

const setPost = async (collectionList, postListJson) => {
	const newPostList = {};
	for (let item of collectionList) {
		if (postListJson[item.postId]) {
			const isDifferent = lodash.isEqual(postListJson[item.postId], item)
			if(!isDifferent) {
				await updatePost(item);
				newPostList[item.postId] = { ...item };
			} 
		} else {
			await insertPost(item)
			newPostList[item.postId] = { ...item };
		}
	}

	return newPostList;
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	let configs = {}
	const collectionList = await getAllPostList(graphql);

	const newPostListJson = await setPost(collectionList, postListJson);

	try {
		configs = yaml.load(fs.readFileSync('./static/admin/config.yml', 'utf8'));
	} catch (error) {
		console.error(error);
	}
	// const indexPage = path.resolve('src/templates/main.jsx');
	// Query for markdown nodes to use in creating pages.
	// You can query for whatever data you want to create pages for e.g.
	// products, portfolio items, landing pages, etc.
	// Variables can be added as the second function parameter

	const collections = configs.collections.map(collection => {
		let category = [];
		lodash.forEach(collection.fields, (field) => {
			if (collection.label !== 'Home' && field.name === 'category') {
				category = field.options;
			}
		})
		return {
			name: collection.label,
			discription: collection.discription,
			category,
		};
	});

	const siteInfo = {
		collections,
		tags: [],
	}

	const createIndexPage = () => {
		const Template = path.resolve(`src/templates/IndexPage.jsx`);
		createPage({
			path: '/',
			component: Template,
			// In your blog post template's graphql query, you can use path
			// as a GraphQL variable to query for data from the markdown file.
			context: {
				siteInfo,
			},
		});
	};

	const createPostPage = (data) => {
		const Template = path.resolve(`src/templates/PostListPage.jsx`);
		createPage({
			path: `${data.id}`,
			component: Template,
			// In your blog post template's graphql query, you can use path
			// as a GraphQL variable to query for data from the markdown file.
			context: {
				siteInfo,
				postId: data.postId,
			},
		});
	};

	collectionList.map((item) => {
		createPostPage(item);
	});
	updateJson(newPostListJson);
	createIndexPage();
};
