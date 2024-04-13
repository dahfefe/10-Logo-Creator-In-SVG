
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

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
  
`
;

// inquirer prompts needed for obtaining user response 
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
    fs.writeFile('logo.svg', logoInputs, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );


  /*  
  // function to render correspoding shape chosen by user
  function renderLogoShape(shape) {
    const userChosenShape = {
      "circle": `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`,
      "triangle": `<polygon points="100,70 50,180 150,180" fill="${shapeColor}" />`,
      "square": `<rect width="100" height="100" fill="${shapeColor}" />`,
    };

    if (userChosenShape[shape]) {
      return userChosenShape[shape];
    } else {
      return ``;
    }
  }

  */

});
  

  