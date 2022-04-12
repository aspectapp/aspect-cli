# Aspect UI builder Node.js CLI

The command line tool for quickly syncing components to and from the [Aspect UI builder](https://dev.aspect.app).

## Installation

To run from the command line, you'll have to install with the `-g` option. Depending on your permissions, installation may require `sudo` prefix.

```bash
$ npm install @metacode-inc/aspect -g
```

## Usage

Fetch your project's jsx/react components using the following command:

```bash
$ aspect fetch --project <projectId> --out <outputDirectory> --key <apiKey>
```

Upload jsx/react components using the following command:

```
$ aspect upload --project <projectId> --src <srcDirectory> --key <apiKey>
```
