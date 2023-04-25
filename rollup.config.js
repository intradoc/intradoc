const { merge }    = require('lodash')
const { globSync } = require('glob')
const typescript   = require('@rollup/plugin-typescript')

/** @type {import('rollup').RollupOptions} */
const options = {
  output: {
    preserveModulesRoot: __dirname,
    preserveModules: true,

    sourcemap: true,
    format:    'cjs',

    dir: '.dist',
  },

  plugins: [
    typescript(),
  ],
}

/** @type {import('rollup').RollupOptions[]} */
module.exports = [
  merge(
    {
      input: globSync('bin/**/*.ts', { ignore: 'bin/**/*.test.ts' }),
    },
    {
      output: {
        banner: '#!/usr/bin/env node',
      },
    },
    options,
  ),
  merge(
    {
      input: globSync('src/**/*.ts', { ignore: 'src/**/*.test.ts' }),
    },
    options,
  )
]
