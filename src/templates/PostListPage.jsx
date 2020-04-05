import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';

import { SEO, Image, Layout } from "../components";

const BlogPost = ({ ...props }) => {
	const {
		pageContext,
	} = props;
	const {
		siteInfo
	} = pageContext;

	const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {private: {eq: true}}}) {
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
	`);
	
	console.log('data', data);
	
	return (
		<Layout navigationList={siteInfo.collections}>
			<SEO title="Home" />
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, }}>
				<Image />
			</div>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	);
};

BlogPost.propTypes = {
	pageContext: PropTypes.object,
}

export default BlogPost;
