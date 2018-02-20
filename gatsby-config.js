module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `06eaatsg07i1`,
        accessToken: `7ca611e671588bfbd763d03d55e8701529e7271ab4da3ae5accf75556aecf37b`,
      },
    },
  	'gatsby-plugin-react-helmet'
  ],
};
