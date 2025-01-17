// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dkmaker.xyz',
  tagline: 'We make it - you break it',
  url: 'https://dkmaker.xyz',
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DK-Maker', // Usually your GitHub org/user name.
  projectName: 'WebSite', // Usually your repo name.
  
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'mig',
        path: 'mig',
        routeBasePath: 'mig',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'klipper',
        path: 'klipper',
        routeBasePath: 'klipper',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'designs',
        path: 'designs',
        routeBasePath: 'designs',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ]

  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dkmaker-xyz/WebSite/edit/main/docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/dkmaker-xyz/WebSite/edit/main/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DZCEXE5XY3',
          anonymizeIP: false,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        // title: 'dkmaker.xyz',
        logo: {
          alt: 'dkmaker.xyz',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/mig',
            label: 'Om mig',
            position: 'left',
            activeBaseRegex: `/mig`,
          },
          {
            to: '/klipper',
            label: 'Klipper',
            position: 'left',
            activeBaseRegex: `/klipper`,
          },
          {
            to: '/designs',
            label: 'Designs',
            position: 'left',
            activeBaseRegex: `/designs`,
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          
          {
            href: 'https://www.thingiverse.com/exiof/designs',
            label: 'Thingiverse',
            position: 'right',            
          },
          {
            href: 'https://www.youtube.com/channel/UCjY0W9GSXoe7TPeRzM-Ahzw',
            label: 'YouTube',
            position: 'right',            
          },
          {
            href: 'https://github.com/dkmaker-xyz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      // footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
