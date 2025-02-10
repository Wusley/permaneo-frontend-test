'use client'

import { store as baseStore, Store } from './store'
import { Provider } from 'react-redux'

type Props = { 
	children: React.ReactNode
  store?: Store
}

const ReduxProvider = ( { store = baseStore, children }: Props ) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
