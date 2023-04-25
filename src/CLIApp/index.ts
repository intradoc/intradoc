export interface Options {
  name: string
  version: string
  homepage: string
  license: string
  author: string
}

export default class CLIApp {
  private readonly _name: string
  private readonly _version: string
  private readonly _homepage: string
  private readonly _license: string
  private readonly _author: string
  private readonly _flags: string[] = []

  constructor (options: Options) {
    this._name = options.name
    this._version = options.version
    this._homepage = options.homepage
    this._license = options.license
    this._author = options.author
  }

  get name (): string {
    return this._name
  }

  get version (): string {
    return this._version
  }

  get homepage (): string {
    return this._homepage
  }

  get license (): string {
    return this._license
  }

  get author (): string {
    return this._author
  }

  addFlags (flags: Readonly<string[]>): CLIApp {
    this._flags.push(...flags)
    return this
  }

  isFlag (value: any): boolean {
    return this._flags.includes(value)
  }
}
