#! /usr/bin/env node

import {program} from 'commander';
import {
  fetchProjectComponents,
  uploadProjectComponents,
} from './commands/project';

program
  .command('fetch')
  .description('Fetch components from specified Aspect project.')
  .option('--project <string>', 'Project ID')
  .option('--out <string>', 'Output directory.')
  .option('--key <string>', 'API key.')
  .option('--dev', 'Developer testing mode.')
  .action(fetchProjectComponents);

program
  .command('upload')
  .description('Upload jsx and css to your Aspect project.')
  .option('--project <string>', 'Project ID')
  .option('--src <string>', 'Source directory.')
  .option('--key <string>', 'API key.')
  .option('--dev', 'Developer testing mode.')
  .action(uploadProjectComponents);

program.parse();
