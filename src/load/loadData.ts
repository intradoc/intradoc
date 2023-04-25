import { join } from 'node:path'

import { parse as parseJSON } from 'json5'
import { parse as parseYAML } from 'yaml'

import {
  fileExists,
  loadFile
} from '../utils'

interface Options {
  data: string[]
  cwd: string
}

export const loadData = async (options: Options): Promise<{
  data: Record<string, any>
  numKeys: number
  numDataSources: number
}> => {
  const cwd = options.cwd

  let loadedData: Record<string, any> = {}

  let numDataSources = 0

  for await (const data of options.data) {
    const path = join(cwd, data)

    if (!await fileExists(path)) {
      const error: any = new Error(`File "${path}" doesn't exist.`)

      error.$metadata = {
        cwd,
        path
      }

      throw error
    }

    const {
      extension,
      content
    } = await loadFile(path)

    const $metadata = {
      cwd,
      path,
      extension,
      content
    }

    let parsedObject: Record<string, any> = {}

    let error: any = false

    switch (extension) {
      case 'json':
      case 'json5':
        try {
          parsedObject = parseJSON(content)
        } catch (e) {
          error = e
        }
        break

      case 'yml':
      case 'yaml':
        try {
          parsedObject = parseYAML(
            content,
            {
              logLevel: 'error'
            }
          )
        } catch (e) {
          error = e
        }
        break
    }

    if (error !== false) {
      const err: any = new Error(`File "${path}" error.`)

      err.$metadata = {
        ...$metadata,
        error
      }

      throw err
    }

    loadedData = {
      ...loadedData,
      ...parsedObject
    }

    numDataSources++
  }

  return {
    data: loadedData,
    numKeys: Object.keys(loadedData).length,
    numDataSources
  }
}
