import { screen, renderWithStore, fireEvent } from '@/utils/test'
import { CardCourse } from './'
import { Course } from '@/redux/features/course/@types'
import { useRouter } from 'next/navigation'

jest.mock( 'next/navigation', () => ( {
  useRouter: jest.fn()
} ) )

const mockCourse: Course = {
  id: 1,
  title: 'Curso de Next.js',
  price: 100,
  description: 'Aprenda Next.js do zero ao avançado.',
  thumbnail: 'https://via.placeholder.com/150',
  created_at: '2021-10-01T00:00:00.000Z',
  url: 'https://www.youtube.com/embed/QhBnZ6NPOY0'
}

describe( 'CardCourse', () => {
  const mockPush = jest.fn()

  beforeEach( () => {
    ( useRouter as jest.Mock ).mockReturnValue( { push: mockPush } )
    mockPush.mockClear()
  } )

  it( 'renders the course card correctly', () => {
    const container = renderWithStore( <CardCourse course={mockCourse} isCourseActive={false} /> )

    expect( screen.getByRole( 'heading', { level: 3 } ) ).toHaveTextContent( mockCourse.title )
    expect( screen.getByText( mockCourse.description ) ).toBeInTheDocument()
    expect( screen.getByText( /inscreva-se agora/i ) ).toBeInTheDocument()
    expect( container ).toMatchSnapshot()
  } )

  it( 'renders active course state correctly', () => {
    const container = renderWithStore( <CardCourse course={mockCourse} isCourseActive={true} /> )

    expect( screen.getByText( /acessar curso/i ) ).toBeInTheDocument()
    expect( container ).toMatchSnapshot()
  } )

  it( 'navigates to active course page when clicked', () => {
    renderWithStore( <CardCourse course={mockCourse} isCourseActive={true} /> )
    fireEvent.click( screen.getByText( /acessar curso/i ) )
    expect( mockPush ).toHaveBeenCalledWith( `/curso/${mockCourse.id}` )
  } )

  it( 'navigates to the page details when clicked', () => {
    renderWithStore( <CardCourse course={mockCourse} isCourseActive={false} /> )
    fireEvent.click( screen.getByText( /inscreva-se agora/i ) )
    expect( mockPush ).toHaveBeenCalledWith( `/curso/detalhes/${mockCourse.id}` )
  } )
} )
