import { getTestApp } from '../../test/utils'
import { parseInput } from '../../src/parse/parseInput'

const app = getTestApp()

describe('parseInput', () => {
  test('empty args', () => {
    const result = parseInput([], app)

    expect(result.hasFiles).toBe(false)
    expect(result.hasData).toBe(false)

    expect(result.files).toEqual([])
    expect(result.data).toEqual([])
  })

  test('1 arg', () => {
    const result = parseInput(['file1'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.hasData).toBe(false)

    expect(result.files).toEqual(['file1'])
    expect(result.data).toEqual([])
  })

  test('2 args', () => {
    const result = parseInput(['file1', 'data'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.hasData).toBe(true)

    expect(result.files).toEqual(['file1'])
    expect(result.data).toEqual(['data'])
  })

  test('3 args', () => {
    const result = parseInput(['file1', 'file2', 'data'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.hasData).toBe(true)

    expect(result.files).toEqual(['file1', 'file2'])
    expect(result.data).toEqual(['data'])
  })

  test('3 args with mixed flags', () => {
    const result = parseInput(['-v', 'file1', 'file2', 'data', '-h'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.hasData).toBe(true)

    expect(result.files).toEqual(['file1', 'file2'])
    expect(result.data).toEqual(['data'])
  })
})
