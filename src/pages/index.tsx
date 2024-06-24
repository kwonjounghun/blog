// Step 1: Import React
import * as React from 'react';
import { SEO } from '../components/SEO';

// Step 2: Define your component
const IndexPage = () => (
  <main>
    <h1>Welcome to my Gatsby site!</h1>
    <p>I'm making this by following the Gatsby Tutorial.</p>
  </main>
);

// You'll learn about this in the next task, just copy it for now
export const Head = () => (<SEO />);

// Step 3: Export your component
export default IndexPage;
