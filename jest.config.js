const nextJest = require( 'next/jest' )

const createJestConfig = nextJest( {
  dir: './'
} )

const customJestConfig = {
  moduleDirectories: [ 'node_modules', '<rootDir>' ],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [ '<rootDir>/setup/jest/jest.setup.js' ],
  testMatch: [ '<rootDir>/src/**/*.test.{ts,tsx}' ],
  setupFiles: [ '<rootDir>/setup/jest/default-mocks.js' ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.stories.*',
    '!**/node_modules/**',
    '!**/__*__/**'
  ],
  moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx' ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1'
  }
}

module.exports = createJestConfig( customJestConfig )

// const nextJestConfig = createJestConfig( customJestConfig )

// module.exports = async () => {
//   const nextConfigs = await nextJestConfig()
//   const key = Object.keys( nextConfigs.moduleNameMapper ).find( key => nextConfigs.moduleNameMapper[key]?.includes( 'fileMock.js' ) )

//   if( key ) {
//     delete nextConfigs.moduleNameMapper[key]
//   }

//   return {
//     ...nextConfigs,
//     transformIgnorePatterns: [ 'node_modules/(?!(swiper|ssr-window|dom7)/)' ]
//   }
// }
