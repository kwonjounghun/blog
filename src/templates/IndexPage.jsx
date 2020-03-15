import React from "react";
import { Link } from "gatsby";

import { SEO, Image, Layout } from "../components";

const IndexPage = ({ ...props }) => {
  const {
    pageContext,
  } = props;
  const {
    siteInfo
  } = pageContext;
    return (
        <Layout navigationList={siteInfo.collections} isSideBar>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default IndexPage;
