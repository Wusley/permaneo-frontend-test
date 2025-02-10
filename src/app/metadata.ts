import Favicon from '/public/brand/favicon.png'
import Thumb from '/public/brand/thumb.png'

const title = 'Grupo Permaneo'
const description = 'Do lançamento de infoprodutos aos eventos presenciais mais impactantes de marketing digital, somos especialistas em construir posicionamento diferenciado, influência e estratégias eficazes de monetização na internet, atuando nos bastidores das maiores personalidades e criadores de conteúdo do Brasil.'
const baseUrl = 'https://permaneo-frontend-test.vercel.app'

export default {
  manifest: '/manifest.json',
  metadataBase: new URL( 'https://permaneo-frontend-test.vercel.app' ),
  applicationName: 'Grupo Permaneo',
  authors: [ { name: 'Grupo Permaneo' } ],
  keywords: [ 'Grupo Permaneo' ],
  title,
  description,
  openGraph: {
    title,
    description
  },
  scalable: 'no',
  charset: 'utf-8',
  creator: 'Grupo Permaneo',
  verification: {
    google: ''
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: '@permaneo',
    images: [ `${baseUrl}/brand/share.jpg` ]
  },
  other: {
    'og:title': title,
    'og:description': description,
    'og:type': 'website',
    'og:url': '/',
    'og:site_name': 'Permaneo',
    'fb:app_id': '',
    'og:image': `${baseUrl}/brand/share.jpg`
  },
  icons: [
    {
      rel: 'icon',
      url: Favicon.src
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: Thumb.src
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: Favicon.src
    }
  ]
}
