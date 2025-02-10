import { screen, fireEvent, renderWithStore } from '@/utils/test'
import { ButtonFavorite } from '.'
import useFavoriteCourse from '@/hooks/useFavoriteCourse'

const toggleFavoriteMock = jest.fn()

jest.mock( '@/hooks/useFavoriteCourse', () => ( {
  __esModule: true,
  default: jest.fn()
} ) )

describe( 'ButtonFavorite', () => {
  beforeEach( () => {
    toggleFavoriteMock.mockClear()

    jest.mocked( useFavoriteCourse ).mockReturnValue( {
      toggleFavorite: toggleFavoriteMock,
      loading: false
    } )
  } )

  it( 'renders the button correctly when the course is not favorited', () => {
    const { container } = renderWithStore( <ButtonFavorite id={1} isCourseFavorite={false} /> )
    
    const button = screen.getByRole( 'button', { name: /favoritar curso/i } )
    expect( button ).toBeInTheDocument()
    expect( container ).toMatchSnapshot()
  } )

  it( 'renders the button correctly when the course is favorited', () => {
    const { container } = renderWithStore( <ButtonFavorite id={1} isCourseFavorite={true} /> )
    
    const button = screen.getByRole( 'button', { name: /desfavoritar curso/i } )
    expect( button ).toBeInTheDocument()
    expect( container ).toMatchSnapshot()
  } )

  it( 'displays the loading state correctly', () => {
    ( useFavoriteCourse as jest.Mock ).mockReturnValue( {
      toggleFavorite: jest.fn(),
      loading: true
    } )

    const container = renderWithStore( <ButtonFavorite id={1} isCourseFavorite={false} /> )
    
    expect( screen.getByRole( 'button' ) ).toHaveAttribute( 'data-loading', 'true' )
    expect( container ).toMatchSnapshot()
  } )

  it( 'calls the toggle function when clicked', () => {
    renderWithStore( <ButtonFavorite id={1} isCourseFavorite={false} /> )
    
    const button = screen.getByRole( 'button', { name: /favoritar curso/i } )
    fireEvent.click( button )
    
    expect( toggleFavoriteMock ).toHaveBeenCalledTimes( 1 )
  } )
} )
