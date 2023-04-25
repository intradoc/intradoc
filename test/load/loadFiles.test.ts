import { files } from '../fixtures'

import { loadFiles } from '../../src/load/loadFiles'

describe('loadFiles', () => {
  test('process .md', async () => {
    const processedFiles = await loadFiles({
      files: [files.file1],
      cwd: files.cwd
    })

    expect(processedFiles.files).toEqual([
      {
        filepath: files.getFile1Filepath(),
        dirpath: files.getFile1Dirpath(),
        filename: files.file1,
        content: await files.getFile1Content()
      }
    ])

    expect(processedFiles.numFiles).toBe(1)
  })
})
