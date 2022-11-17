/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PGM Documentation',
  tagline: 'Documentation for PGM, the original Minecraft PvP Game Manager',
  url: 'https://pgm.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'PGMDev',
  projectName: 'Website',
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
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/PGMDev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
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
      algolia: {
        appId: 'NZ27HYOOIL',
        apiKey: 'c62192a38bfbb94cd4cf82dddf151826'
      },
     // code highlighting
      prism: {
        theme: require('prism-react-renderer/themes/palenight'),
        darkTheme: require('prism-react-renderer/themes/palenight'),
        /// three backticks (```) will default to XML highlighting
        defaultLanguage: 'xml',
      },
    }),
};

module.exports = config;
