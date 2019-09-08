// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Blog',
  siteDescription: 'A simple blog designed with Gridsome',
  plugins: [
    {
      use: '@noxify/gridsome-source-git',
      options: {
        name: 'gridsome-content-test',
        remote: 'https://github.com/noxify/gridsome-content-test.git',
        target: 'content/gridsome-content-test/',
        typeName: 'GitPost',
        route: '/gitpost/:id',
        remark: {
          plugins: [
            ['remark-toc'],
            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders': ['Youtube', 'Twitter', 'Gist', 'Codepen', 'Soundcloud', 'JSFiddle']
            }]
          ]
        }
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  },
}
