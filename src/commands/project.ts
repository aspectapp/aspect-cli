import axios from 'axios';
import * as colors from 'colors';

async function fetchProjectComponents(options: any) {
  try {
    if (!options.project) {
      throw new Error('--project (project ID) is required.');
    }
    if (!options.key) {
      throw new Error('--key (API key) is required.');
    }
    console.log(
      colors.bold.blue(
        `Fetching project components for project with ID: ${options.project} ...`
      )
    );

    const urlBase = options.dev
      ? 'http://localhost:80/'
      : 'https://api.aspect.app/';

    console.log(options);
    const response = await axios.post(urlBase + 'v1/get-project-components', {
      projectId: options.project,
      apiKey: options.key,
    });
    console.log(response.data);
  } catch (error) {
    if (typeof error === 'object') {
      console.error('error', (error as any)?.response?.data);
    }
  }
}

async function uploadProjectComponents(
  projectId: string,
  source: string,
  options: any
) {
  try {
    if (!projectId) {
      throw new Error('Project ID is required.');
    }
    if (!options.key) {
      throw new Error('--key is required.');
    }

    console.log(`Uploading project components for project ${projectId}...`);

    // glob for all files in the source directory of type .jsx, .tsx, .css, .scss
    // const files = await import('glob').then((glob) =>
    const urlBase = options.dev
      ? 'http://api.localhost/'
      : 'https://api.aspect.app/';
    const response = await axios.post(
      urlBase + 'v1/upload-project-components',
      {
        projectId,
        apiKey: options.key,
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export {fetchProjectComponents, uploadProjectComponents};
