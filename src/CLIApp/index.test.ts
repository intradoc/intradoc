import CLIApp, { type Options } from '.'

const defaultOptions: Options = {
  name: 'name',
  version: '0.0.0',
  homepage: 'example.com',
  license: 'MIT',
  author: 'anonymous'
}

describe('CLIApp', () => {
  test('basics', () => {
    const app = new CLIApp({ ...defaultOptions })

    expect(app.name).toBe('name')
    expect(app.version).toBe('0.0.0')
    expect(app.homepage).toBe('example.com')
    expect(app.license).toBe('MIT')
    expect(app.author).toBe('anonymous')
  })
})
