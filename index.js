#! /usr/bin/env node

const { program } = require("commander");
const {
  fetchProjectComponents,
  uploadProjectComponents,
} = require("./commands/project");

program
  .command("fetch <projectId> [destination]")
  .description("Fetch components from specified Aspect project.")
  .option("--key", "Aspect API key.")
  .action(fetchProjectComponents);

program
  .command("upload <projectId> [source]")
  .description("Upload jsx and css to your Aspect project.")
  .option("--key", "Aspect API key.")
  .action(uploadProjectComponents);

program.parse();
