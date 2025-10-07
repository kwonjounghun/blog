import * as React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';

const IndexPage = () => (
  <main>
    <h1>Welcome to Jonghun's Blog</h1>
    <p>Hi there! This is my personal blog built with Gatsby.</p>
    <Link to="/about">About me</Link>
  </main>
);

export const Head = () => <SEO title="Home" />;

export default IndexPage;
