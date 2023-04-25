import { normalize, extname } from 'node:path'
import { stat, pathExists, readFile, writeFile } from 'fs-extra'

// -----------------------------------------------------------------------------

// const nodeGlob = require('glob')

// export const glob = async (path: string): Promise<string[]> => {
//   return await new Promise<string[]>(
//     (resolve, reject) => {
//       nodeGlob(
//         path,
//         {},
//         (error: any, files: string[]) => {
//           if (error !== undefined) {
//             reject(error)
//           } else {
//             resolve(files)
//           }
//         }
//       )
//     }
//   )
// }

export const fileExists = async (path: string): Promise<boolean> => {
  path = normalize(path)

  if (await pathExists(path)) {
    const stats = await stat(path)

    if (stats.isFile()) {
      return true
    }
  }

  return false
}

export const loadFile = async (path: string): Promise<{
  content: string
  extension: string
}> => {
  let extension = extname(path)

  if (extension !== '') {
    extension = extension.substring(1).toLowerCase()
  }

  return {
    content: await readFile(path, { encoding: 'utf-8' }),
    extension
  }
}

export const saveFile = async (path: string, data: string): Promise<void> => {
  return await writeFile(path, data)
}
