import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/conply-playbook/blog',
    component: ComponentCreator('/conply-playbook/blog', 'a29'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/archive',
    component: ComponentCreator('/conply-playbook/blog/archive', 'b1d'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/first-blog-post',
    component: ComponentCreator('/conply-playbook/blog/first-blog-post', '45a'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/long-blog-post',
    component: ComponentCreator('/conply-playbook/blog/long-blog-post', '51a'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/mdx-blog-post',
    component: ComponentCreator('/conply-playbook/blog/mdx-blog-post', '041'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/tags',
    component: ComponentCreator('/conply-playbook/blog/tags', '464'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/tags/docusaurus',
    component: ComponentCreator('/conply-playbook/blog/tags/docusaurus', 'bd4'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/tags/facebook',
    component: ComponentCreator('/conply-playbook/blog/tags/facebook', '1e6'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/tags/hello',
    component: ComponentCreator('/conply-playbook/blog/tags/hello', '9ee'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/tags/hola',
    component: ComponentCreator('/conply-playbook/blog/tags/hola', '634'),
    exact: true
  },
  {
    path: '/conply-playbook/blog/welcome',
    component: ComponentCreator('/conply-playbook/blog/welcome', '580'),
    exact: true
  },
  {
    path: '/conply-playbook/markdown-page',
    component: ComponentCreator('/conply-playbook/markdown-page', '394'),
    exact: true
  },
  {
    path: '/conply-playbook/docs',
    component: ComponentCreator('/conply-playbook/docs', 'bfa'),
    routes: [
      {
        path: '/conply-playbook/docs',
        component: ComponentCreator('/conply-playbook/docs', '114'),
        routes: [
          {
            path: '/conply-playbook/docs',
            component: ComponentCreator('/conply-playbook/docs', 'c14'),
            routes: [
              {
                path: '/conply-playbook/docs/',
                component: ComponentCreator('/conply-playbook/docs/', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/category/conply-mobile-app',
                component: ComponentCreator('/conply-playbook/docs/category/conply-mobile-app', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/category/using-conply',
                component: ComponentCreator('/conply-playbook/docs/category/using-conply', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Conply Mobile App/Home',
                component: ComponentCreator('/conply-playbook/docs/Conply Mobile App/Home', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Conply Mobile App/Onboarding',
                component: ComponentCreator('/conply-playbook/docs/Conply Mobile App/Onboarding', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Conply Mobile App/Profile',
                component: ComponentCreator('/conply-playbook/docs/Conply Mobile App/Profile', 'e92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Conply Mobile App/Users',
                component: ComponentCreator('/conply-playbook/docs/Conply Mobile App/Users', 'ffd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Creating an Account',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Creating an Account', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Dashboard',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Dashboard', '394'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/FAQ',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/FAQ', '8cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Get Support',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Get Support', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Health',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Health', '7dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Induction',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Induction', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Newsfeed',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Newsfeed', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/Time & Attendance',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/Time & Attendance', 'd5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conply-playbook/docs/Using Conply/User management',
                component: ComponentCreator('/conply-playbook/docs/Using Conply/User management', '692'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/conply-playbook/',
    component: ComponentCreator('/conply-playbook/', '0f1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
