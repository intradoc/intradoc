export const parseArgV = (argv: any): {
  binary: string
  cwd: string
  args: any[]
} => {
  let binary = ''
  let cwd = ''
  let args: any[] = []

  if (Array.isArray(argv)) {
    if (argv.length < 2) {
      const error: any = new Error('At least the binary and script args must be present.')

      error.$metadata = { argv }

      throw error
    }

    binary = argv[0]
    cwd = argv[1]
    args = argv.slice(2) ?? []
  }

  return {
    binary,
    cwd,
    args
  }
}
