import axios from 'axios';
import * as colors from 'colors';
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
      ? 'http://localhost:80/'
      : 'https://api.aspect.app/';

    const response = await axios.post(urlBase + 'v1/get-project-components', {
      projectId: project,
      apiKey: key,
    });

    // write the files to the output directory
    const files = response.data.data;
    for (const file of files) {
      const {name, data} = file;

      console.log(path.join('test', name));

      const relativePath = path.join(out || '', name);
      console.log(relativePath);

      console.log(`Writing ${relativePath} ...`);
      await writeFile(relativePath, data);
    }
  } catch (error) {
    if (typeof error === 'object') {
      console.error('error', (error as any)?.response?.data);
    }
  }
}

async function uploadProjectComponents(options: any) {
  try {
    const {src, project, key} = options;
    if (!project) {
      throw new Error('--project (project ID) is required.');
    }
    if (!key) {
      throw new Error('--key (API key) is required.');
    }

    console.log(`Uploading project components for project ${project}...`);

    // glob for all files in the source directory of type .jsx, .tsx, .css, .scss
    // const files = await import('glob').then((glob) =>
    const urlBase = options.dev
      ? 'http://api.localhost/'
      : 'https://api.aspect.app/';
    const response = await axios.post(
      urlBase + 'v1/upload-project-components',
      {
        projectId: project,
        apiKey: key,
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export {fetchProjectComponents, uploadProjectComponents};
