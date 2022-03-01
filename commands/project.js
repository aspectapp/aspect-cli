const chalk = require("chalk");
const axios = require("axios");

async function fetchProjectComponents(projectId, source, options) {
  try {
    if (!projectId) {
      throw new Error("Project ID is required.");
    }
    if (!options.key) {
      throw new Error("--key is required.");
    }

    console.log(
      chalk.blue.bold(`Fetching project components for project ${projectId}...`)
    );

    const urlBase = options.dev
      ? "https://api.localhost/"
      : "https://api.aspect.app/";
    const response = await axios.post(urlBase + "v2/fetch-project-components", {
      projectId,
      key: options.key,
    });
    console.log(chalk.greenBright(response));
  } catch (error) {
    console.error(chalk.red.bold(error));
  }
}

async function uploadProjectComponents(projectId, source, options) {
  try {
    if (!projectId) {
      throw new Error("Project ID is required.");
    }
    if (!options.key) {
      throw new Error("--key is required.");
    }

    console.log(
      chalk.blue.bold(
        `Uploading project components for project ${projectId}...`
      )
    );

    // glob for all files in the source directory of type .jsx, .tsx, .css, .scss
    const urlBase = options.dev
      ? "https://api.localhost/"
      : "https://api.aspect.app/";
    const response = await axios.post(
      urlBase + "v2/upload-project-components",
      {
        projectId,
        key: options.key,
      }
    );
    console.log(chalk.greenBright(response));
  } catch (error) {
    console.error(chalk.red.bold(error));
  }
}

module.exports = { fetchProjectComponents, uploadProjectComponents };
