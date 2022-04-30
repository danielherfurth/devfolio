module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Daniel Herfurth',
    // Main Site Title
    title: `Daniel Herfurth | Chemist & Analyst`,
    // Description that goes under your name in main bio
    description: `R&D and QC chemist with experience in data analysis`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/danielherfurth`,
    // Optional: LinkedIn account URL
    // linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `Chemist with a background in R&D and data analysis, with strong Python experience in a wide range of applications.
     Team player looking for opportunities working with data or software in a dynamic environment.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {

        name: 'Working with Python and SQL',
        description:
          'A reduced SQL database according to the shown ERD. It uses SQL and Python to query and analyze the data.',
        link: 'https://github.com/danielherfurth/sql-challenge',
      },
        {
                name: 'Cryptocurrency Analysis via Machine Learning',
                description:
                    'A machine-learning model created with Python to analyze and cluster together cryptocurrencies, then plot the data.',
                link: 'https://github.com/danielherfurth/unsupervised-learning-homework',
            },
            {
                name: 'Pharmaceutical Analysis using Pandas and Matplotlib',
                description:
                    'Pandas analysis of drugs\' efficacy, visualized with Pyplot.',
                link: 'https://github.com/danielherfurth/matplotlib-challenge/blob/master/Pymaceuticals/pymaceuticals.ipynb',
            },
            {
                name: 'Interactive Map Showing the Analysis of Volcanoes',
                description:
                    'Create interactive maps using Leaflet with data from OpenStreetMap API. Visualize volcano intensity and depth',
                link: 'https://github.com/danielherfurth/mapping-web-homework',
            },
            {
                name: 'Excel-to-PDF Conversion Script',
                description:
                    'A script to automate batch conversion of .xlsx files to .pdf files.',
                link: 'https://github.com/danielherfurth/Excel-to-PDF/blob/main/xl_to_pdf.py',
            },

      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',

        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
