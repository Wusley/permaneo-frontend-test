import { NextRequest, NextResponse } from 'next/server'
import { getInMemoryDatabase } from '@/app/api/db'

export async function PATCH( req: NextRequest ) {
  try {
    const { courseId, action } = await req.json()
    const inMemoryDatabase = getInMemoryDatabase()

    if( !courseId || !action ) {
      return NextResponse.json( { message: 'Dados inválidos' }, { status: 400 } )
    }

    if( !inMemoryDatabase.user.favorites ) inMemoryDatabase.user.favorites = []
 
    if( action === 'add' ) {
      if( !inMemoryDatabase.user.favorites ) inMemoryDatabase.user.favorites = []
      if( !inMemoryDatabase.user.favorites.some( ( fav ) => fav.courseId === courseId ) ) {
        inMemoryDatabase.user.favorites.push( { courseId } )
      }
    } else if( action === 'remove' ) {
      inMemoryDatabase.user.favorites = inMemoryDatabase.user.favorites?.filter( ( fav ) => fav.courseId !== courseId )
    } else {
      return NextResponse.json( { message: 'Ação inválida' }, { status: 400 } )
    }

    return NextResponse.json( { favorites: { courseId } }, { status: 200 } )
  } catch ( error ) {
    return NextResponse.json( { message: 'Erro interno' }, { status: 500 } )
  }
}
