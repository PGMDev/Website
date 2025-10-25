/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PGM Documentation',
  tagline: 'Documentation for PGM, the original Minecraft PvP Game Manager',
  url: 'https://pgm.dev/',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'PGMDev',
  projectName: 'Website',
  trailingSlash: false,
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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/PGMDev/Website/tree/master/',
            showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            // Redirect from old introduction link to current link
            to: '/docs/modules/introduction',
            from: '/docs/modules/general/introduction'
          },
          {
            // Redirect from old Events command page
            to: '/docs/commands/events',
            from: '/docs/events/commands',
          },
          {
            // Redirect from old Packaging and Releasing page name
            to: '/docs/guides/preparing/packaging-and-releasing',
            from: '/docs/guides/packaging/compiling-and-releasing'
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/guides/preparing')) {
            // Redirect from old guides link to current guides link
            return [
              existingPath.replace('/docs/guides/preparing', '/docs/guides/packaging'),
            ];
          }
          return undefined;
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'apple-mobile-web-app-title', content: 'PGM Documentation' },
        { property: 'og:site_name', content: 'PGM Documentation' },
        { name: 'theme-color', content: '#FF4500' }
      ],
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
              to: "docs/modules/introduction",
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
            label: 'Discord',
            href: 'https://discord.gg/pEEcwTk',
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
        copyright: `Copyright &#169; ${new Date().getUTCFullYear()} The PGM project and its contributors`,
      },
      announcementBar: {
        id: 'new_features',
        content:
          'New Features: <a href="/docs/modules/general/proto">Proto 1.5.0</a>, <a href="/docs/modules/mechanics/tracking-compass">Tracking Compass</a>, <a href="/docs/modules/gear/consumables">Consumables</a>, and <a href="/docs/modules/general/main#map-variants">Map Variants</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      algolia: {
        appId: 'NZ27HYOOIL',
        apiKey: 'ad0db60d12f0ec4d68150a64097ee7c6',
        indexName: 'pgm',
        contextualSearch: false,
      },
      // code highlighting
      prism: {
        theme: require("prism-react-renderer").themes.palenight,
        darkTheme: require("prism-react-renderer").themes.palenight,
        /// three backticks (```) will default to XML highlighting
        defaultLanguage: 'xml',
      },
    }),
};

export default config;
