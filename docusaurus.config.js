// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Filmmakers API Reference',
  tagline: 'Comprehensive documentation for the Filmmakers API.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://api.filmmakers.eu', // Updated to api.filmmakers.eu
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // Updated baseUrl to root
  trailingSlash: false, // Consider setting to true if you face routing issues on GitHub Pages

  // GitHub pages deployment config.
  organizationName: 'denkungsart', // Your GitHub org/user name.
  projectName: 'filmmakers-api', // Updated repository name
  deploymentBranch: 'gh-pages', // Explicitly set deployment branch

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Make docs the root after baseUrl
          // Update this to your repo.
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
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
    }),
};

export default config;
