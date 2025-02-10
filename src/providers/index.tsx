'use client'

import ChakraProvider from '@/UI/provider'
import ReduxProvider from '@/redux/provider'
import { Store } from '@/redux/store'

interface ProvidersProps { 
	children: React.ReactNode
  store?: Store
}

const Providers = ( { store, children }: ProvidersProps ) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        { children }
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default Providers
