
// Calling required file system and NPM package (Inquirer)
const inquirer = require('inquirer');
const fs = require('fs');

// function that creates markdown text with literals to input user responses from command-line prompts
const generateLogo = 
({ text, 
  textColor, 
  shape, 
  shapeColor }) =>
  
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
  
`
;

// inquirer prompts needed for obtaining user response per section of README.md file
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What is the text for your logo? (Please only enter 1-3 characters)',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What is the color of the text? (You may enter color keyword or hexadecimal number)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select the shape of your logo.',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What is the color of the shape for your logo? (You may enter color keyword or hexadecimal number)',
    },

  ])

  // .then function asynchronously collects responses from user input
  .then((responses) => {
    const logoInputs = generateLogo(responses);

    // writeFile function generates README file from user responses and error logging to aid in troubleshooting
    fs.writeFile('README_auto.md', readMeContent, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });

  // function to render correspoding badge to README file based on user selection
  function renderLicenseBadge(license) {
    const licenseBadges = {
      "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    };

    if (licenseBadges[license]) {
      return licenseBadges[license];
    } else {
      return ``;
    }
  }

  // function to render correspoding license link to README file based on user selection
  function renderLicenseLink(license) {
    const licenseLinks = {
      "MIT License": "https://opensource.org/license/mit",
      "Apache License 2.0": "http://www.apache.org/licenses/LICENSE-2.0",
      "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0.en.html",
      "Mozilla Public License 2.0": "https://www.mozilla.org/en-US/MPL/2.0/",
    };

    if (licenseLinks[license]) {
      return licenseLinks[license];
    } else {
      return ``;
    }
  
  }
  