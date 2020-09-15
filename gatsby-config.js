module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `fridge notes`,
    author: {
      name: `sam heckle`,
      summary: `class of itp 2022. doing shit.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `http://blog.samheckle.com`,
    social: {
      twitter: `the_heckle`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fridge notes`,
        short_name: `fridge-notes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
