import { getTestAppOptions } from './utils'
import { run } from '../src'

describe('run', () => {
  test('basic run', async () => {
    await run({
      argv: [
        'node-binary',
        __dirname,
        'fixtures/run/test.md',
        'fixtures/run/test.json'
      ],
      app: getTestAppOptions(),
      replacer: (content, data) => ({
        content,
        numReplaced: 1
      })
    })
  })
})
