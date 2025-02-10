import { render } from '@testing-library/react'
import Logo from './'

jest.mock( './link', () => ( {
  link: {
    icon: jest.fn( () => <svg data-testid="logo-icon" /> ),
    text: 'Test Logo'
  }
} ) )

describe( 'Logo Component', () => {
  it( 'matches the snapshot', () => {
    const { container } = render( <Logo /> )
    expect( container ).toMatchSnapshot()
  } )
} )