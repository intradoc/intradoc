import { parseArgV } from '../../src/parse/parseArgV'

describe('parseArgV', () => {
  test('basics - no args', () => {
    const result = parseArgV(['bin', 'script'])

    expect(result.binary).toBe('bin')
    expect(result.cwd).toBe('script')
    expect(result.args).toEqual([])
  })

  test('basics - with 1 arg', () => {
    const result = parseArgV(['bin', 'script', 1])

    expect(result.binary).toBe('bin')
    expect(result.cwd).toBe('script')
    expect(result.args).toEqual([1])
  })

  test('basics - with 2 args', () => {
    const result = parseArgV(['bin', 'script', 1, 2])

    expect(result.binary).toBe('bin')
    expect(result.cwd).toBe('script')
    expect(result.args).toEqual([1, 2])
  })
})
