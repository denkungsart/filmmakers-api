// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// Item labels come from each doc's `sidebar_label` front matter.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction', 'quickstart', 'authentication'],
    },
    'api-reference',
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'cors',
        'rate-limits',
        'pagination',
        'errors',
        { type: 'doc', id: 'webhooks', className: 'sidebar-item-beta' },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'attributes',
        'actor-profiles',
        'crew-profiles',
        'talent-agencies',
        'blog-posts',
        'showreels',
        'showreel-media',
        { type: 'doc', id: 'messages', className: 'sidebar-item-beta' },
        { type: 'doc', id: 'casting-calls', className: 'sidebar-item-beta' },
      ],
    },
    'changelog',
  ],
};

export default sidebars;
