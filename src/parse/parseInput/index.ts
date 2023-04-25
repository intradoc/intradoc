import CLIApp from '../../CLIApp'

export const parseInput = (args: any[], app: CLIApp): {
  hasFiles: boolean
  hasData: boolean
  files: string[]
  data: string[]
} => {
  const input: string[] = []

  let ongoing = false

  for (const arg of args) {
    if (!ongoing) {
      if (app.isFlag(arg)) {
        continue
      }

      ongoing = true
    }

    if (ongoing) {
      if (app.isFlag(arg)) {
        break
      }

      input.push(arg)
    }
  }

  let files: string[] = []
  let data: string[] = []

  if (input.length === 1) {
    files.push(input[0])
  } else if (input.length > 1) {
    files = input.slice(0, -1)
    data = input.slice(-1)
  }

  return {
    hasFiles: files.length > 0,
    hasData: data.length > 0,
    files,
    data
  }
}
