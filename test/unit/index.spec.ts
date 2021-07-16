import echo from '../../src/index'

describe('Test', () => {
  it('should pass', () => {
    const message = 'hello'
    expect(echo(message)).toBe(message)
  })
})
