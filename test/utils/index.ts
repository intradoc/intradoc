import CLIApp, { type Options } from '../../src/CLIApp'

import dataFlags from '../../src/parse/parseData/flags'
import fileFlags from '../../src/parse/parseFiles/flags'
import helpFlags from '../../src/parse/parseHelp/flags'
import versionFlags from '../../src/parse/parseVersion/flags'

export const getTestAppOptions = (): Options => {
  return {
    name: 'test-app',
    version: '0.0.0-development',
    homepage: 'https://www.test.com',
    license: 'ISC',
    author: 'Author <author@email.com> (https://www.author.com)'
  }
}

export const getTestApp = (): CLIApp => {
  const app = new CLIApp({ ...getTestAppOptions() })

  app
    .addFlags(dataFlags)
    .addFlags(fileFlags)
    .addFlags(helpFlags)
    .addFlags(versionFlags)

  return app
}
