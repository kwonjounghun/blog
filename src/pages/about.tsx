import * as React from 'react';
import { SEO } from '../components/SEO';

const AboutPage = () => (
  <main>
    <h1>About Me</h1>
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
  </main>
);

export const Head = () => (<SEO title="about page" />);

export default AboutPage;
