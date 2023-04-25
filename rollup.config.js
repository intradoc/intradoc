const { globSync } = require('glob')
const typescript   = require('@rollup/plugin-typescript')

console.log(
  globSync([
    'bin/**/*.ts',
    'src/**/*.ts',
  ], {
    ignore: [
      'bin/**/*.test.ts',
      'src/**/*.test.ts',
    ],
  })
)

/** @type {import('rollup').RollupOptions} */
module.exports = {

  // input: 'src/index.ts',

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
