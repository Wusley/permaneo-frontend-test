const localStorageMocks = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
}

module.exports = { localStorageMocks }
