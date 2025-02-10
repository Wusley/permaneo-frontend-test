import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import Providers from '@/providers'
import { rootReducer, RootState } from '@/redux/store'

const createTestStore = ( preloadedState: Partial<RootState> = {} ) =>
  configureStore( {
    reducer: rootReducer,
    preloadedState,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
  } )

const renderWithStore = (
  ui: React.ReactElement,
  preloadedState: Partial<RootState> = {},
  options?: unknown
) => {
  const store = createTestStore( preloadedState )

  return {
    ...render( ui, {
      wrapper: ( { children } ) => <Providers store={store}>{children}</Providers>,
      ...options
    } ),
    store
  }
}

const renderHookWithStore = <TProps, TResult>(
  hook: ( props: TProps ) => TResult,
  preloadedState: Partial<RootState> = {}
) => {
  const store = createTestStore( preloadedState )

  return {
    ...renderHook( hook, {
      wrapper: ( { children } ) => <Providers store={store}>{children}</Providers>
    } ),
    store
  }
}

export * from '@testing-library/react'
export { renderWithStore, renderHookWithStore }
