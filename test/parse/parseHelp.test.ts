import { parseHelp } from '../../src/parse/parseHelp'

describe('parseHelp', () => {
  test('no help flag', () => {
    const { hasHelp } = parseHelp([])

    expect(hasHelp).toBe(false)
  })

  test('-h help flag', () => {
    const { hasHelp } = parseHelp(['-h'])

    expect(hasHelp).toBe(true)
  })

  test('--help help flag', () => {
    const { hasHelp } = parseHelp(['--help'])

    expect(hasHelp).toBe(true)
  })

  test('help flag somewhere', () => {
    const { hasHelp } = parseHelp(['-v', '-h'])

    expect(hasHelp).toBe(true)
  })
})
