import { getInMemoryDatabase } from '@/app/api/db'

export async function GET() {
  const inMemoryDatabase = getInMemoryDatabase()
  
  return Response.json( inMemoryDatabase.user )
}