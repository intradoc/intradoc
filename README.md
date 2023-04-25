<h1 align="center">
  intradoc
</h1>

<br />

<!-- Badges - 1st row -->
<p align="center">
  <!-- NPM badge -->
  <a href="https://www.npmjs.com/package/intradoc"><img src="https://img.shields.io/npm/v/intradoc?color=brightgreen&logo=npm" alt="release-badge"></a>
  <!-- CI badge -->
  <a href="https://github.com/intradoc/intradoc/actions?query=workflow%3ACI"><img src="https://github.com/intradoc/intradoc/workflows/CI/badge.svg" alt="ci-badge"></a>
  <!-- Coverage badge -->
  <a href="https://codecov.io/gh/intradoc/intradoc"><img src="https://img.shields.io/codecov/c/github/intradoc/intradoc?logo=codecov&logoColor=white" alt="coverage-badge"></a>
  <!-- Dependency badge -->
  <a href="https://github.com/intradoc/intradoc/pulls?q=is%3Apr+is%3Aopen+label%3Asecurity"><img src="https://img.shields.io/badge/Dependabot-✔-brightgreen.svg?logo=dependabot" alt="dependency-badge"></a>
  <!-- Security badge -->
  <a href="https://socket.dev/npm/package/intradoc"><img src="https://socket.dev/api/badge/npm/package/intradoc" alt="security-badge"></a>
</p>

<!-- Badges - 2nd row -->
<p align="center">
  <!-- Code style badge -->
  <a href="https://www.npmjs.com/package/ts-standard"><img src="https://img.shields.io/badge/Code-TS--Standard-3178C6.svg?logo=typescript&logoColor=white" alt="code-style-badge"></a>
  <!-- Commit style badge -->
  <a href="https://github.com/semantic-release/semantic-release/blob/master/CONTRIBUTING.md#commit-message-guidelines"><img src="https://img.shields.io/badge/Commit-Conventional_Commits-EF7B4D.svg?logo=git&logoColor=white" alt="commit-style-badge"></a>
  <!-- Release workflow badge -->
  <a href="https://semantic-release.gitbook.io/semantic-release"><img src="https://img.shields.io/badge/Release-Semantic_Release-ED2B88.svg?logo=semanticweb&logoColor=white" alt="release-workflow-badge"></a>    
</p>

<!-- Badges - 3rd row -->
<p align="center">
  <!-- License badge -->
  <a href="https://github.com/intradoc/intradoc/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?logo=github" alt="license-badge"></a>
  <!-- Contribution badge -->
  <a href="https://github.com/intradoc/intradoc/blob/main/.github/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-Welcome!-brightgreen.svg?logo=git&logoColor=white" alt="contribution-badge"></a>
</p>

---

<h3 align="center">
  Update your docs in-place.
</h3>

<p align="center">
  A simple, in-place <b>document content replacer</b> CLI utility,<br/> which works by <b>replacing placeholder texts</b> within your files.
</p>

---

## 🤔 Why?

- **Keep your documents up-to-date** during the SDLC, especially during releases without creating additional or separate in-between and temp files.
- **Avoid errors and improve consistency** by using simple comment placeholders and populate them with new data.
- **Save time and effort** by automating the process of replacing API, usage, and other information within your files instead of you updating them manually.

## 📦 Installation

```
npm i intradoc
```

## ☕ Usage

```
$ intradoc <flags> <input>
$ intradoc <input> <flags>

$ intradoc <flags> -f [...files] -d [...data]
$ intradoc <flags> [...files] [data]

$ intradoc -f [...files] -d [...data] <flags>
$ intradoc [...files] [data] <flags>
```

## 💻 CLI

<!--- <% cli --->
```
Usage:
  $ intradoc <flags> <input>
  $ intradoc <input> <flags>

  $ intradoc <flags> -f [...files] -d [...data]
  $ intradoc <flags> [...files] [data]

  $ intradoc -f [...files] -d [...data] <flags>
  $ intradoc [...files] [data] <flags>

Examples:
  $ intradoc -f README.md -d data.json

  $ intradoc README.md data.yml

Options:
  -f, --file, --files   file(s) to process
  -d, --data            data to use

  -v, --version   output the version number
  -h, --help      display help for intradoc
```
<!--- cli %> --->
---

## ⭐ Related

- [@intradoc on NPM](https://www.npmjs.com/search?q=keywords:intradoc)

## 🍻 Contribution

**Any contribution is ***highly appreciated*****. To get going, check out the [**contribution guidelines**][url-contrib-doc].

***Thank you!***

## ©️ License

[MIT][url-license-doc] @ [Richard King](https://richrdkng.com)

<!--- References =============================================================================== -->

<!--- URLs -->
[url-license-doc]: https://github.com/intradoc/intradoc/blob/main/LICENSE
[url-contrib-doc]: https://github.com/intradoc/intradoc/blob/main/.github/CONTRIBUTING.md
