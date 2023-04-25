/*
quick test for CLI execution:

help:
$ npx ts-node bin --help

version:
$ npx ts-node bin --version

test run:
$ npx ts-node bin fixtures/run/test.md fixtures/run/test.json
*/

import { join } from 'node:path'
import execa from 'execa'

import pkg from '../package.json'

const ROOT = join(__dirname, '..')

describe('CLI', () => {
  test('default run', async () => {
    const { stdout } = await execa('npx', ['ts-node', 'bin'], { cwd: ROOT })

    expect(stdout.length).toBeGreaterThan(0)
    expect(stdout).toMatch(new RegExp(`^${pkg.name} v${pkg.version}.*Usage.*Example.*Options.*$`, 's'))
  })

  test('get version', async () => {
    const { stdout } = await execa('npx', ['ts-node', 'bin', '--version'], { cwd: ROOT })

    expect(stdout.length).toBeGreaterThan(0)
    expect(stdout).toBe(`v${pkg.version}`)
  })
})
