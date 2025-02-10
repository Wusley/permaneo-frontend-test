import React from 'react';
import type { Preview } from '@storybook/react';
import {Center  } from '@chakra-ui/react'
import Providers from '../src/providers'

import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const mockRouter: AppRouterInstance = {
  back: async () => {},
  push: async () => {},
  replace: async () => {},
  refresh: () => {},
  forward: () => {},
  prefetch: async () => {},
};

const withProviders = (StoryFn: any) => (
  <AppRouterContext.Provider value={mockRouter}>
    <Providers>
      <Center>
        <StoryFn />
      </Center>
    </Providers>
  </AppRouterContext.Provider>
);

const preview: Preview = {
  decorators: [withProviders],
	tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview;
