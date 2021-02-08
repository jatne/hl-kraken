module.exports = {
  siteMetadata: {
    title: 'HL Kraken',
    siteUrl: `https://hlkraken.app`,
    description: `HL Kraken!`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'sji41ofl',
        dataset: 'production',
        token: 'skQEfxCEE3nVhGJA5DYFBYUEFxB8XKodyALnMje5BVNWhmSNZdq1XOWYxrm7o5eM8jeTtegkgQSiaxpNLxJ2JflGiphTAglGZgnNlTaQgs9ESZv98so3s0s5mSh5Enr85mDJh00WWH0vFwQ0h1bbHLXN5kVaub0jXB0eQAt61Zzf4QU5cgQI',
        watchMode: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    "@chakra-ui/gatsby-plugin",
  ],
};
