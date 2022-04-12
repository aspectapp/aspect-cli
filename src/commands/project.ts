import axios from 'axios';
import * as colors from 'colors';
import * as fs from 'fs';
import {writeFile} from 'fs/promises';
import * as path from 'path';
import * as glob from 'glob';

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

    // async glob for all files in the source directory of type .jsx, .tsx, .css, .scss
    const files: string[] = await new Promise((resolve, reject) => {
      glob(
        path.join(src || '', '**/*.{jsx,tsx,css,scss}'),
        {
          ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'],
        },
        (err, files) => {
          if (err) {
            reject(err);
          } else {
            resolve(files);
          }
        }
      );
    });

    // get each file's contents
    const fileContent = await Promise.all(
      files.map(async file => {
        return {data: await fs.promises.readFile(file, 'utf8'), path: file};
      })
    );

    const urlBase = options.dev
      ? 'http://localhost/'
      : 'https://dev.aspect.app/';
    await axios.post(urlBase + 'v1/upload-project-components', {
      projectId: project,
      apiKey: key,
      files: fileContent,
    });

    console.log(colors.green('Successfully uploaded project components.'));
  } catch (error) {
    if (typeof error === 'object') {
      console.error('error', (error as any)?.response?.data);
    } else {
      console.error(error);
    }
  }
}

export {fetchProjectComponents, uploadProjectComponents};
