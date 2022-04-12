# Aspect UI builder Node.js Library

The Aspect Node.js library provides convenient syncing of components to and from the [Aspect UI builder](https://dev.aspect.app).

## Installation

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
