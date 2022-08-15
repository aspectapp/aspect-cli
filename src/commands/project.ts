import axios from 'axios';
import * as colors from 'colors';
import * as fs from 'fs';
import {writeFile} from 'fs/promises';
import * as path from 'path';

async function fetchProjectComponents(options: any) {
  try {
    const {out, project, key} = options;
    if (!project) {
      throw new Error('--project (project ID) is required.');
    }
    if (!key) {
      throw new Error('--key (API key) is required.');
    }

    console.log(
      colors.bold.blue(
        `Fetching project components for project with ID: ${project} ...`
      )
    );

    const urlBase = options.dev
      ? 'http://localhost/'
      : 'https://dev.aspect.app/';

    const response = await axios.post(urlBase + 'v1/get-project-components', {
      projectId: project,
      apiKey: key,
    });

    // make sure the output directory exists
    if (!fs.existsSync(out)) {
      fs.mkdirSync(out, {recursive: true});
    }

    // write the files to the output directory
    const files = response.data.data as any[];
    await Promise.all(
      files.map(file => {
        const {name, data} = file;
        const relativePath = path.join(out || '', name);
        return writeFile(relativePath, data);
      })
    );

    console.log(colors.green('Successfully fetched project components.'));
  } catch (error) {
    if (typeof error === 'object') {
      console.error('error', (error as any)?.response?.data);
    } else {
      console.error(error);
    }
  }
}

export {fetchProjectComponents};
