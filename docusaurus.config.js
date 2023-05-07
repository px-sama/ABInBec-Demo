// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beertech Alchemy',
  tagline: 'The official documentation site for all NAZ data sets',
  url: 'https://docs.alchemy.beertech.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Alchemy-Icon.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  //plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'teradata-updates',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'teradata-updates',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './teradata-updates',
        blogSidebarCount: 'ALL',
      },
    ],
    [
      "@twilio-labs/docusaurus-plugin-for-datadog-rum",
      {
        clientToken: "pub69dccce93d9057d0d059430a0de73e03",
        applicationId: "643e0ad2-4d72-4790-8206-d265616f7cd9",
        service: "alchemy-website",
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
        title: 'Beertech Alchemy',
        logo: {
          alt: 'Alchemy Logo',
          src: 'img/Alchemy-Icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'certified-sets/intro',
            position: 'left',
            label: 'Certified Data Sets',
          },
          {
            type: 'doc',
            docId: 'guides/FAQ',
            position: 'left',
            label: 'Guides',
            to: '/docs/guides/FAQ',
          },
          {
            position: 'left',
            label: 'Teradata Updates 🆕',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'doc',
                docId: 'teradata-updates/decommissioned-tables',
                label: 'Decommissioned Tables',
                to: '/docs/teradata-updates/decommissioned-tables',
              },
              {
                type: 'doc',
                docId: 'teradata-updates/FAQ',
                label: 'FAQ',
                to: '/docs/teradata-updates/FAQ',
              },
              {
                label: 'Sprint Updates',
                to: '/teradata-updates',
              },
            ],
          },
          {
            href: 'https://forms.office.com/r/f95zHn6nYq',
            label: 'Contact Support',
            position: 'right',
          },
          {
            href: 'https://github.com/ab-inbev-beertech/alchemy',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [
          {
            title: 'Certified Data Sets',
            items: [
              {
                label: 'Introduction',
                to: '/docs/certified-sets/intro',
              },
              {
                label: 'How to Certify',
                to: '/docs/Certify',
              },
              {
                label: 'US Data',
                to: '/docs/category/us-data',
              },
              {
                label: 'Canada Data',
                to: '/docs/category/canada-data',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Welcome',
                to: '/blog/welcome',
              },
              {
                label: 'News',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'FAQ',
                to: '/docs/guides/FAQ',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/ab-inbev-beertech/alchemy',
              },
              {
                label: 'Snowflake Access',
                to: '/docs/guides/Snowflake-Access',
              },
            ],
          },
        ],
        logo: {
          alt: "beertech",
          src: 'img/black-horiz.png',
          width: "300",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Beertech. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid']
};

module.exports = config;
