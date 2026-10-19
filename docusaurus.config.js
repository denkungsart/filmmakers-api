// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Filmmakers API Reference',
  tagline: 'Comprehensive documentation for the Filmmakers API.',
  favicon: 'img/favicon.png',

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    faster: true,
  },

  url: 'https://api.filmmakers.eu',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'denkungsart',
  projectName: 'filmmakers-api',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

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
          routeBasePath: '/',
          editUrl:
            'https://github.com/denkungsart/filmmakers-api/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Filmmakers Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark-mode.svg',
        },
        items: [
          {
            href: 'https://github.com/denkungsart/filmmakers-api',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'API Reference',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contact Support',
                href: 'https://www.filmmakers.eu/contact/new',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Back to Filmmakers',
                href: 'https://www.filmmakers.eu',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/denkungsart/filmmakers-api',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Filmmakers. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['ruby', 'php'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '509MVS2GVZ',

        // Public API key: it is safe to commit it
        apiKey: '9ac84610cef87e63c1280d777da35154',

        indexName: 'api-filmmakers',
      },
    }),
};

export default config;
