import { data } from '../../test/fixtures'

import { loadData } from '../../src/load/loadData'

describe('loadData', () => {
  test('load regular JSON', async () => {
    const processedData = await loadData({
      data: [data.data1],
      cwd: data.cwd
    })

    expect(processedData.data).toEqual({
      data1: 'content 1'
    })

    expect(processedData.numKeys).toBe(1)
    expect(processedData.numDataSources).toBe(1)
  })

  test('load JSON5', async () => {
    const processedData = await loadData({
      data: [data.data2],
      cwd: data.cwd
    })

    expect(processedData.data).toEqual({
      data2: 'content 2'
    })

    expect(processedData.numKeys).toBe(1)
    expect(processedData.numDataSources).toBe(1)
  })

  test('load YAML', async () => {
    const processedData = await loadData({
      data: [data.data3],
      cwd: data.cwd
    })

    expect(processedData.data).toEqual({
      data3: 'content 3'
    })

    expect(processedData.numKeys).toBe(1)
    expect(processedData.numDataSources).toBe(1)
  })

  test('load JSON and YAML files too', async () => {
    const processedData = await loadData({
      data: [
        data.data1,
        data.data2,
        data.data3
      ],
      cwd: data.cwd
    })

    expect(processedData.data).toEqual({
      data1: 'content 1',
      data2: 'content 2',
      data3: 'content 3'
    })

    expect(processedData.numKeys).toBe(3)
    expect(processedData.numDataSources).toBe(3)
  })
})
