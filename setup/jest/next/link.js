module.exports = jest.mock( 'next/link', () => {
  return ( { children } ) => {
    return children
  }
} )
