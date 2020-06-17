const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `test-web`,
        short_name: `test-web`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src')
      }
    },
    {
     resolve: `gatsby-plugin-react-redux`,
     options: {
       pathToCreateStoreModule: './src/state/createStore',
       serialize: {
         space: 0,
         isJSON: true,
         unsafe: false,
       },
     },
   },

  ],
}
