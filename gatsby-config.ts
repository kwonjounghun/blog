import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'jonghun-blog',
    description: 'Example project for the Gatsby Head API',
    image: '/gatsby-icon.png',
    siteUrl: 'https://jonghunkwon.github.io/blog',
  },
  // GitHub Pages에서 사용할 때 필요한 설정
  pathPrefix: '/blog',
  // More easily incorporate content into your pages through automatic
  // TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`,
      },
    },
  ],
};

export default config;
