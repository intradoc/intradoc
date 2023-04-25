// TODO: CLI input improvements
/*
CLI input improvements:

--verbose flag
--dryRun flag

intradoc README.md key-1="value"

intradoc README* data.json
intradoc README* data.json5
intradoc README* data.yml

data.json > intradoc README.md
*/

import { replace } from '@intradoc/core'
import CLIApp, { type Options } from './CLIApp'

// -----------------------------------------------------------------------------

import {
  parseArgV
} from './parse/parseArgV'

import {
  flags as dataFlags,
  parseData
} from './parse/parseData'

import {
  flags as filesFlags,
  parseFiles
} from './parse/parseFiles'

import {
  parseInput
} from './parse/parseInput'

import {
  flags as helpFlags,
  parseHelp
} from './parse/parseHelp'

import {
  flags as versionFlags,
  parseVersion
} from './parse/parseVersion'

// -----------------------------------------------------------------------------

import { processInput } from './process/processInput'

// -----------------------------------------------------------------------------

import { printHelp } from './print/printHelp'
import { printVersion } from './print/printVersion'

// -----------------------------------------------------------------------------

interface CLIOptions {
  argv: any[]
  app: Options
  replacer: typeof replace
  cwd?: string
}

export const run = async (options: CLIOptions): Promise<void> => {
  const app = new CLIApp({
    name: options.app.name,
    version: options.app.version,
    homepage: options.app.homepage,
    license: options.app.license,
    author: options.app.author
  })

  app
    .addFlags(dataFlags)
    .addFlags(filesFlags)
    .addFlags(helpFlags)
    .addFlags(versionFlags)

  const {
    cwd: parsedCWD,
    args
  } = parseArgV(options.argv)

  const cwd = options.cwd ?? parsedCWD

  // ---------------------------------------------------------------------------
  const { hasHelp } = parseHelp(args)

  if (hasHelp) {
    printHelp(app)
    return
  }

  // ---------------------------------------------------------------------------
  const { hasVersion } = parseVersion(args)

  if (hasVersion) {
    printVersion(app)
    return
  }

  // ---------------------------------------------------------------------------
  const parsedFiles = parseFiles(args, app)
  const parsedData = parseData(args, app)

  let hasFiles = parsedFiles.hasFiles
  let hasData = parsedData.hasData

  let files = parsedFiles.files
  let data = parsedData.data

  if (!hasFiles && !hasData) {
    const parsedInput = parseInput(args, app)

    hasFiles = parsedInput.hasFiles
    hasData = parsedInput.hasData

    files = parsedInput.files
    data = parsedInput.data
  }

  const $metadata = {
    options,
    app: options.app,
    argv: options.argv,
    args
  }

  if (hasFiles && !hasData) {
    const error: any = new Error('At least 1 input data must be specified.')
    error.$metadata = $metadata
    throw error
  }

  if (hasData && !hasFiles) {
    const error: any = new Error('At least 1 input file must be specified.')
    error.$metadata = $metadata
    throw error
  }

  if (hasFiles && hasData) {
    return await processInput({
      files,
      data,
      app,
      replacer: options.replacer,
      cwd
    })
  }

  // ---------------------------------------------------------------------------
  printHelp(app)
}
