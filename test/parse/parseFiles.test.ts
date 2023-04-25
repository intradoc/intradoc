import { getTestApp } from '../../test/utils'
import { parseFiles } from '../../src/parse/parseFiles'

const app = getTestApp()

describe('parseFiles', () => {
  test('empty args', () => {
    const result = parseFiles([], app)

    expect(result.hasFiles).toBe(false)
    expect(result.files).toEqual([])
  })

  test('-f with no args', () => {
    const result = parseFiles(['-f'], app)

    expect(result.hasFiles).toBe(false)
    expect(result.files).toEqual([])
  })

  test('-f with 1 arg', () => {
    const result = parseFiles(['-f', 'file1'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.files).toEqual(['file1'])
  })

  test('-f with 2 args', () => {
    const result = parseFiles(['-f', 'file1', 'file2'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.files).toEqual(['file1', 'file2'])
  })

  test('-f with 2 args with mixed flags', () => {
    const result = parseFiles(['-v', '-f', 'file1', 'file2', '-d', 'data1'], app)

    expect(result.hasFiles).toBe(true)
    expect(result.files).toEqual(['file1', 'file2'])
  })
})
