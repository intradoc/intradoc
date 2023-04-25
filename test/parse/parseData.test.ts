import { getTestApp } from '../../test/utils'
import { parseData } from '../../src/parse/parseData'

const app = getTestApp()

describe('parseData', () => {
  test('empty args', () => {
    const result = parseData([], app)

    expect(result.hasData).toBe(false)
    expect(result.data).toEqual([])
  })

  test('-d with no args', () => {
    const result = parseData(['-d'], app)

    expect(result.hasData).toBe(false)
    expect(result.data).toEqual([])
  })

  test('-d with 1 arg', () => {
    const result = parseData(['-d', 'data1'], app)

    expect(result.hasData).toBe(true)
    expect(result.data).toEqual(['data1'])
  })

  test('-d with 2 args', () => {
    const result = parseData(['-d', 'data1', 'data2'], app)

    expect(result.hasData).toBe(true)
    expect(result.data).toEqual(['data1', 'data2'])
  })

  test('-d with 1 arg with mixed flags', () => {
    const result = parseData(['-v', '-f', 'file1', 'file2', '-d', 'data1'], app)

    expect(result.hasData).toBe(true)
    expect(result.data).toEqual(['data1'])
  })
})
