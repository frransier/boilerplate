export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce92726478ddd928c4753d3',
                  title: 'Sanity Studio',
                  name: 'boilerplate-studio',
                  apiId: '167808b9-76ec-4620-b00e-8319e7ef6e3d'
                },
                {
                  buildHookId: '5ce927265ff1edb1c3194d3c',
                  title: 'Portfolio Website',
                  name: 'boilerplate-web',
                  apiId: '9e44a009-02f5-4f7a-862f-5b3994253fc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frransier/boilerplate',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://boilerplate-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
