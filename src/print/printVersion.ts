import CLIApp from '../CLIApp'

export const printVersion = (app: CLIApp): void => {
  console.log(`v${app.version}`)
}
