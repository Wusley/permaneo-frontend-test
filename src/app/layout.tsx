import Providers from '@/providers'
import VercelAnalytics from '@/components/analytics/vercel-analytics'
import metadataBase from './metadata'
import viewportBase from './viewport'

import dynamic from 'next/dynamic'
import { Grid, Flex, Container } from '@chakra-ui/react'

const Account = dynamic( () => import( '@/components/account' ), { suspense: true } )
const Header = dynamic( () => import( '@/components/header' ), { suspense: true } )
const Footer = dynamic( () => import( '@/components/footer' ), { suspense: true } )
const ScrollToTop = dynamic( () => import( '@/components/scroll-to-top' ), { suspense: true } )

export const metadata = {
  ...metadataBase
} 

export const viewport = {
  ...viewportBase
} 

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ( { children }: RootLayoutProps ): JSX.Element => {
  const year = new Date().getFullYear()
  
  return (
    <html lang='pt-br' className='scroll-smooth'>
      <head>
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
      </head>
      
      <body suppressHydrationWarning={true}>
        <ScrollToTop />
        <VercelAnalytics />

        <Providers>
          <Account />
        
          <Grid
            gridTemplateRows='auto 1fr auto'
            gridTemplateColumns='1fr'
            height='100vh'
          >
            <Flex as="header" width="100%" justifyContent="center" >
              <Header />
            </Flex>
          
            <Flex as="main" width="100%" justifyContent="center" alignContent='100%' padding="5">
              {children}
            </Flex>
          
            <Flex as="footer" width="100%" justifyContent="center">
              <Container maxWidth="container.xl" centerContent padding="5">
                <Footer year={year} />
              </Container>
            </Flex>
          </Grid>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

