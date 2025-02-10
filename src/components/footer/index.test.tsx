import { renderWithStore } from '@/utils/test'
import Footer from './'

describe( 'Footer Snapshot', () => {
  it( 'matches the snapshot', () => {
    const { container } = renderWithStore( <Footer year={2025} /> )
    expect( container ).toMatchSnapshot()
  } )
} )