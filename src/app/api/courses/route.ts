import { getInMemoryDatabase } from '@/app/api/db'

export async function GET( request: Request ) {
  const url = new URL( request.url )
  const inMemoryDatabase = getInMemoryDatabase()
  
  const ids = url.searchParams.get( 'ids' )
  
  if( ids ) {
    const courseIdsSet = new Set( ids.split( ',' ).map( id => parseInt( id, 10 ) ) )
    const filteredCourses = inMemoryDatabase.courses.filter( course => courseIdsSet.has( course.id ) )
    return Response.json( filteredCourses )
  } else if( !ids && url.search.includes( 'ids' ) ) {
    return Response.json( { courses: [] } )
  }

  return Response.json( inMemoryDatabase.courses )
}
