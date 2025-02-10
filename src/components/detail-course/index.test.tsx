import { screen, renderWithStore } from '@/utils/test'
import { DetailCourse } from './'
import moment from 'moment'

const mockFormatCurrency = jest.fn( ( price ) => price.toFixed( 2 ) )
jest.mock( '@/hooks/useNumberFormatter', () => () => mockFormatCurrency )

jest.mock( 'moment', () => {
  const actualMoment = jest.requireActual( 'moment' )
  actualMoment.defineLocale = jest.fn()
  return ( dateString: string ) => actualMoment.utc( dateString )
} )

describe( 'DetailCourse', () => {
  const defaultProps = {
    id: 1,
    title: 'Curso de TypeScript',
    description: 'Aprenda TypeScript do básico ao avançado.',
    startAt: '2025-01-20',
    price: 199.99
  }

  it( 'renders the course details correctly', () => {
    const container = renderWithStore( <DetailCourse {...defaultProps} /> )

    expect( screen.getByRole( 'heading', { level: 2 } ) ).toHaveTextContent( defaultProps.title )
    expect( screen.getByText( defaultProps.description ) ).toBeInTheDocument()
    expect( screen.getByText( `R$ ${mockFormatCurrency( defaultProps.price )}` ) ).toBeInTheDocument()
    expect( screen.getByText( `Esse curso começa em ${moment( defaultProps.startAt ).format( 'DD/MM/YYYY' )}` ) ).toBeInTheDocument()
    expect( container ).toMatchSnapshot()
  } )

  it( 'renders the favorite button', () => {
    renderWithStore( <DetailCourse {...defaultProps} /> )
    expect( screen.getByRole( 'button' ) ).toBeInTheDocument()
  } )

  it( 'renders the subscription button', () => {
    renderWithStore( <DetailCourse {...defaultProps} /> )
    expect( screen.getByText( /inscreva-se agora/i ) ).toBeInTheDocument()
  } )
} )
