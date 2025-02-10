import { getInMemoryDatabase } from '@/app/api/db'


export async function GET( _req: Request, { params }: { params: { id: string } } ) {
  const { id } = params
  const inMemoryDatabase = getInMemoryDatabase()
  const course = inMemoryDatabase.courses.find( course => course.id === parseInt( id ) )

  if( !course ) {
    return Response.json( { message: 'Curso não encontrado' }, { status: 404 } )
  }

  return Response.json( course )
}