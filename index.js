
// Calling required file system and NPM package (Inquirer)
const inquirer = require('inquirer');
const fs = require('fs');

const LogoInputs = require('./lib/LogoInputs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

// function that creates markdown text with literals to input user responses from command-line prompts
const generateLogo = 
({ text, 
  textColor, 
  shape, 
  shapeColor }) => 
  
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${renderLogoShape(shape)} fill="${shapeColor}" />

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

    let newLogo;
    if (responses.shape === "circle") {
      newLogo = new Circle(responses)
    } else if (responses.shape === "triangle") {
      newLogo = new Triangle(responses)
    } else if (responses.shape === "square") {
      newLogo = new Square(responses)
    }
    // console.log(newLogo);   // console.logs new object based on the selected shape
    // console.log(newLogo.render());  // console.logs new SVG from render function of corresponding shape class
    const newGeneratedLogo = newLogo.render();

    const logoInputs = generateLogo(responses);
    // console.log(logoInputs);

    // writeFile function generates README file from user responses and error logging to aid in troubleshooting
    fs.writeFile('logo.svg', newGeneratedLogo, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
    );

  });

  // const chosenShape = shape.render();

// function to render correspoding shape chosen by user
function renderLogoShape(shape) {
  const userChosenShape = {
    "circle": `<circle cx="150" cy="100" r="80"`,
    "triangle": `<polygon points="100,70 50,180 150,180"`,
    "square": `<rect width="100" height="100"`,
  };

  if (userChosenShape[shape]) {
    return userChosenShape[shape];
  } else {
    return ``;
  }
}
  

  