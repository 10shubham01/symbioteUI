import type { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
  logo: (
    <div className="flex justify-center items-center flex-col">
      <img
        src="/venomlogo.png"
        className="dark:invert-0 dark:grayscale-0 invert grayscale dark:saturate-100 saturate-200"
        height="30"
        width="30"
      />
      <span className="font-bold text-sm">Symbiote.UI</span>
    </div>
  ),
  editLink: { component: null },
  project: {
    link: 'https://github.com/10shubham01/symbioteUI',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/10shubham01/symbioteUI',
  footer: {
    text: 'Symbiote UI',
  },
};

export default config;
