# Node.js CLI for Aspect UI builder

The official command line tool for quickly syncing components between the [Aspect UI builder](https://dev.aspect.app) and your codebase.

## Installation

Since this runs from the command line, you'll have to install with the `-g` option. Depending on your permissions, installation may require `sudo` prefix.

```bash
$ npm install @metacode-inc/aspect -g
```

## Usage

Fetch your project's jsx/react components using the following command:

```bash
$ aspect fetch --project <projectId> --out <outputDirectory> --key <apiKey>
```

Upload jsx/react components using the following command:

```bash
$ aspect upload --project <projectId> --src <srcDirectory> --key <apiKey>
```
