import { sep } from 'node:path'
import { replace } from '@intradoc/core'

import type CLIApp from '../../CLIApp'

import { loadData } from '../../load/loadData'
import { loadFiles } from '../../load/loadFiles'

import { saveFile } from '../../utils'

interface Options {
  files: string[]
  data: string[]
  app: CLIApp
  replacer: typeof replace
  cwd: string
}

export const processInput = async (options: Options): Promise<void> => {
  const $ = console.log
  const cwd = options.cwd

  const {
    data,
    numKeys,
    numDataSources
  } = await loadData({
    data: options.data,
    cwd
  })

  const {
    files,
    numFiles
  } = await loadFiles({
    files: options.files,
    cwd
  })

  $()
  $(`loaded data with ${numKeys} key(s) from ${numDataSources} source(s)`)
  $()
  $(`process ${numFiles} file(s):`)

  for await (const file of files) {
    const {
      content,
      numReplaced
    } = options.replacer(file.content, data)

    await saveFile(
      file.filepath,
      content
    )

    $(`  - ${file.dirpath}${sep}`)
    $(`    ${file.filename} - ${numReplaced} occurrence(s) replaced`)
  }
}
