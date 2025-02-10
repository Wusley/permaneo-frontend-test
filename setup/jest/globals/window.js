const windowMock = {
  open: jest.fn(),
  location: {
    href: jest.fn(),
    reload: jest.fn(),
    hostname: 'localhost'
  },
  navigator: {
    clipboard: jest.fn()
  },
  matchMedia: function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn()
    }
  }
}

module.exports = { windowMock }
