import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  "stories": [ '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)' ],

  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-docs',
    '@storybook/addon-viewport'
  ],

  "framework": "@storybook/nextjs",
  "staticDirs": [ "../public" ],

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
