const { localStorageMock, windowMock } = require( './globals' )

require( './next' )

global.open = windowMock.open

delete global.location
global.location = windowMock.location

global.localStorage = localStorageMock

global.matchMedia = windowMock.matchMedia

global.fetch = jest.fn( () =>
  Promise.resolve( {
    json: () => Promise.resolve( { data: 'mocked data' } )
  } )
)
