export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Frontend Repo',
            value: 'https://github.com/benjaminsehl/sanexty',
            category: 'Code',
          },
          {
            title: 'Backend Repo',
            value: 'https://github.com/benjaminsehl/sanexty',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://fabric-web.now.sh/',
            category: 'apps',
          },
          {
            title: 'Shopify',
            value: 'https://kotn-prod.myshopify.com/admin',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent blog posts',
        order: '_createdAt desc',
        types: ['post'],
      },
      layout: { width: 'medium' },
    },
  ],
}
