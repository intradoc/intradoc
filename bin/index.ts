#!/usr/bin/env node

import { join } from 'node:path'
import { readJSON } from 'fs-extra'

import { replace } from '@intradoc/core'
import { run } from '../src'

async function main (): Promise<void> {
  const pkg = await readJSON(join(__dirname, '../package.json'))

  await run({
    argv: process.argv,
    replacer: replace,
    app: {
      name: pkg.name,
      version: pkg.version,
      license: pkg.license,
      author: pkg.author,
      homepage: pkg.homepage
    }
  })
}

// @typescript-eslint/no-floating-promises compatible top level await
main()
  .then(() => {})
  .catch(() => {})
