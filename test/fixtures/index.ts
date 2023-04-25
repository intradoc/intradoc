import { join } from 'node:path'

import { readFile } from 'fs-extra'

export const data = {
  cwd: join(__dirname, 'data'),
  data1: 'data1.json' as const,
  data2: 'data2.json5' as const,
  data3: 'data3.yml' as const
}

export const files = {
  cwd: join(__dirname, 'files'),
  file1: 'file1.md' as const,

  getFile1Filepath: () => join(__dirname, 'files', 'file1.md'),
  getFile1Dirpath: () => join(__dirname, 'files'),

  getFile1Content: async () => {
    const path = join(__dirname, 'files', 'file1.md')

    return await readFile(path, 'utf-8')
  }
}
