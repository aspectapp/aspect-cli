// import {Chalk} from 'chalk';
import {Axios} from 'axios';

async function fetchProjectComponents(
  projectId: string,
  source: string,
  options: any
) {
  // const chalk = new Chalk();
  const axios = new Axios();

  try {
    if (!projectId) {
      throw new Error('Project ID is required.');
    }
    if (!options.key) {
      throw new Error('--key is required.');
    }
    console.log(`Fetching project components for project ${projectId}...`);

    const urlBase = options.dev
      ? 'https://api.localhost/'
      : 'https://api.aspect.app/';
    const response = await axios.post(urlBase + 'v1/fetch-project-components', {
      projectId,
      key: options.key,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function uploadProjectComponents(
  projectId: string,
  source: string,
  options: any
) {
  // const chalk = new Chalk();
  const axios = new Axios();

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
      ? 'https://api.localhost/'
      : 'https://api.aspect.app/';
    const response = await axios.post(
      urlBase + 'v1/upload-project-components',
      {
        projectId,
        key: options.key,
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export {fetchProjectComponents, uploadProjectComponents};
