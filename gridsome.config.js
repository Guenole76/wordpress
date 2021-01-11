module.exports = {
    siteName: 'Worpdress Headless',
    plugins: [
      {
        use: '@gridsome/source-wordpress',
        options: {
          baseUrl: 'http://guidoline.com',
        }
      },
      {
          use: '@noxify/gridsome-plugin-remote-image',
          options: {
              forceHttps: false,
              typeName: 'WordPressAttachment',
              sourceField: 'sourceUrl',
              targetField: 'remoteLink',
              targetPath: './src/assets/remoteImages'
          }
      }
    ],
    templates: {
      WordPressPost: '/blog/:slug'
    }
  }