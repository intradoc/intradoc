import { parseVersion } from '../../src/parse/parseVersion'

describe('parseVersion', () => {
  test('no version flag', () => {
    const { hasVersion } = parseVersion([])

    expect(hasVersion).toBe(false)
  })

  test('-v version flag', () => {
    const { hasVersion } = parseVersion(['-v'])

    expect(hasVersion).toBe(true)
  })

  test('--version version flag', () => {
    const { hasVersion } = parseVersion(['--version'])

    expect(hasVersion).toBe(true)
  })

  test('version flag somewhere', () => {
    const { hasVersion } = parseVersion(['-h', '-v'])

    expect(hasVersion).toBe(true)
  })
})
