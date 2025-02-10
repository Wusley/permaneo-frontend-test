const config = {
  publicRuntimeConfig: {}
}

module.exports = jest.mock( 'next/config', () => () => config )
