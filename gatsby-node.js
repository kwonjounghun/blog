const path = require('path');
const lodash = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');

const getCollectionList = async (graphql) => {
	const collections = await graphql(`
    query loadPagesQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              collection
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
		const collections = lodash.map(result.data.allMarkdownRemark.edges, 'node.frontmatter.collection');
		const uniqByCollections = lodash.uniqBy(collections);

		return uniqByCollections;
	});

	return collections;
}

const getOneCollectionList = async (graphql, collection) => {
	const collections = await graphql(`
    query loadPagesQuery {
      allMarkdownRemark(filter: {frontmatter: {private: {eq: true}, collection: {eq: "${collection}"}}}) {
        edges {
          node {
            frontmatter {
              title
              private
              date
              Thumbnail
              category
              description
              collection
            }
          }
        }
      }
    }
  `).then(result => {
		if (result.errors) {
			throw result.errors;
		}

		return lodash.map(result.data.allMarkdownRemark.edges, 'node.frontmatter');
	});

	return collections;
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	let configs = {}

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

	console.log('collections', collections);

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

	const listPageData = collections.map(async (item) => {
		const data = await getOneCollectionList(graphql, item.name);
		return data;
	});

	const createPostPage = (item, data) => {
		const Template = path.resolve(`src/templates/PostListPage.jsx`);
		createPage({
			path: `${item}`,
			component: Template,
			// In your blog post template's graphql query, you can use path
			// as a GraphQL variable to query for data from the markdown file.
			context: {
				siteInfo,
				data
			},
		});
	};

	listPageData.map((item, index) => {
		createPostPage(collections[index].name, item);
	})

	createIndexPage();

};