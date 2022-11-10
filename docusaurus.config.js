// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PGM Documentation',
  tagline: 'Documentation for PGM, the original Minecraft PvP Game Manager',
  url: 'https://pgm.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PGMDev', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PGMDev/Website/tree/master/src',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PGM Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
          label: "XML",
          position: "left",
          items: [
            {
              to: "docs/modules/general/introduction",
              label: "Modules",
            },
            {
              to: "docs/reference/items/inventory",
              label: "Reference",
            },
            {
              to: "docs/guides/xml-pointers/regions",
              label: "Guides",
            },
            {
              to: "docs/examples/airship-battle",
              label: "Examples",
            },
          ],
        },
          {to: 'docs/commands/main', label: 'Commands', position: 'left'},
          {to: 'docs/events/main', label: 'Events', position: 'left'},
          {to: 'downloads', label: 'Downloads', position: 'left'},
          // search bar here
          {
            href: 'https://github.com/PGMDev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Modules',
                to: '/docs/modules/general/main',
              },
              {
                label: 'Reference',
                to: '/docs/reference/items/inventory',
              },
              {
                label: 'Guides',
                to: '/docs/guides/xml-pointers/regions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pEEcwTk',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OvercastPGM',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Downloads',
                to: 'downloads',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PGMDev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The PGM project and its contributors`,
      },
     /*
      * TODO migrate to new DocSearch/generate new creditantals that expired Feburary 1st 2022
      * Will fix frozen search results
      * https://docusaurus.io/blog/2021/11/21/algolia-docsearch-migration
      algolia: {
      apiKey: "eb1f17b6501799dbbc0ecf0bae35ed57",
      indexName: "pgm",
    },
     */
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
