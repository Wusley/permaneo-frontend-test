const router = {
  useRouter: jest.fn( () => ( {
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    refresh: jest.fn(),
    forward: jest.fn()
  } ) )
}

module.exports = router
