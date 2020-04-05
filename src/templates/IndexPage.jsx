import React, { useState } from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';

import { SEO, Image, Layout } from "../components";

const IndexPage = ({ ...props }) => {
	const [skip, setSkip] = useState(0);
	const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {private: {eq: false}}}, limit: 1, skip: 0) {
        edges {
          node {
            frontmatter {
              title
              private
              date(formatString: "YYYY-MM-DD")
              Thumbnail
              category
              description
              collection
						}
						excerpt(pruneLength: 280)
          }
        }
      }
    }
	`);

	const {
		pageContext,
	} = props;
	const {
		siteInfo
	} = pageContext;
	return (
		<Layout
			navigationList={siteInfo.collections}
			isSideBar
			PostListData={data.allMarkdownRemark.edges}
			skip={skip}
			setSkip={setSkip}	
		>
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

IndexPage.propTypes = {
	pageContext: PropTypes.object
}

export default IndexPage;
