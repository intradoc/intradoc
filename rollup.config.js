const { globSync } = require('glob')
const typescript   = require('@rollup/plugin-typescript')

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: globSync([
    'bin/**/*.ts',
    'src/**/*.ts',
  ], {
    ignore: [
      'bin/**/*.test.ts',
      'src/**/*.test.ts',
    ],
  }),

  output: {
    preserveModules: true,

    sourcemap: true,
    format:    'cjs',

    dir: '.dist',
  },

  plugins: [
    typescript(),
  ],
}
