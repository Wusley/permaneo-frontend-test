import { render } from '@testing-library/react'
import { Loading } from './'

describe( 'Loading Component', () => {
  it( 'matches the snapshot with default props', () => {
    const { container } = render( <Loading /> )
    expect( container ).toMatchSnapshot()
  } )

  it( 'matches the snapshot with custom props', () => {
    const { container } = render( <Loading color="blue.500" height="200px" marginY={4} size="80px" /> )
    expect( container ).toMatchSnapshot()
  } )
} )