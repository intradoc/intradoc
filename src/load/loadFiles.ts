import {
  join,
  dirname,
  basename
} from 'node:path'

import {
  fileExists,
  loadFile
} from '../utils'

interface Options {
  files: string[]
  cwd: string
}

export const loadFiles = async (options: Options): Promise<{
  files: Array<{
    filepath: string
    dirpath: string
    filename: string
    content: string
  }>
  numFiles: number
}> => {
  const loadedFiles: Array<{
    filepath: string
    dirpath: string
    filename: string
    content: string
  }> = []

  const cwd = options.cwd

  for await (const file of options.files) {
    const path = join(cwd, file)

    if (!await fileExists(path)) {
      const error: any = new Error(`File "${path}" doesn't exist.`)

      error.$metadata = {
        cwd,
        path,
        file
      }

      throw error
    }

    const { content } = await loadFile(path)

    loadedFiles.push({
      filepath: path,
      dirpath: dirname(path),
      filename: basename(path),
      content
    })
  }

  return {
    files: loadedFiles,
    numFiles: loadedFiles.length
  }
}
