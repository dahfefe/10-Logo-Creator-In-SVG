
// Calling required file system and NPM package (Inquirer)
const inquirer = require('inquirer');
const fs = require('fs');

// const LogoInputs = require('./lib/LogoInputs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

// function that creates markdown text with literals to input user responses from command-line prompts
// Note: const generateLogo not needed for this assignment but may be useful code for future development
// const generateLogo = 
// ({ text, 
//   textColor, 
//   shape, 
//   shapeColor }) => 
  
// `
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   ${renderLogoShape(shape)} fill="${shapeColor}" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg>
  
// `
// ;

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

    let textNumber = responses.text
    if (textNumber.length === 0) {
      throw new Error('Text logo must be 1-3 characters in length.');
    }
    
    if (textNumber.length > 3) {
      throw new Error('Text logo must be 1-3 characters in length.');
    }

    const color1 = responses.textColor
    const color2 = responses.shapeColor
    function validateColor(color1, color2) {
      const validColorName = /\b(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|purple|red|silver|teal|white|yellow|orange)\b/i;
      const validHexColor = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
    
      if (!validColorName.test(color1, color2) && !validHexColor.test(color1, color2)) {
        throw new Error("Invalid color format. Please use a valid color name or hex code.");
      }
    
      // If no error is thrown, color is valid
      return true;
    }

    validateColor(color1, color2);

    // conditional that renders the appropriate svg code based on user's selected shape choice
    let newLogo;
    if (responses.shape === "circle") {
      newLogo = new Circle(responses)
    } else if (responses.shape === "triangle") {
      newLogo = new Triangle(responses)
    } else if (responses.shape === "square") {
      newLogo = new Square(responses)
    }
    console.log(newLogo);   // console.logs new object based on the selected shape
    console.log(newLogo.render());  // console.logs new SVG from render function of corresponding shape class
    const newGeneratedLogo = newLogo.render();

    // const logoInputs = generateLogo(responses);
    // console.log(logoInputs);

    // writeFile function generates README file from user responses and error logging to aid in troubleshooting
    fs.writeFile('logo.svg', newGeneratedLogo, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
    );

  });

// Note: this function not needed for this assignment but may be useful code for future development
// function to render correspoding shape chosen by user
// function renderLogoShape(shape) {
//   const userChosenShape = {
//     "circle": `<circle cx="150" cy="100" r="80"`,
//     "triangle": `<polygon points="100,70 50,180 150,180"`,
//     "square": `<rect width="100" height="100"`,
//   };

//   if (userChosenShape[shape]) {
//     return userChosenShape[shape];
//   } else {
//     return ``;
//   }
// }
  

  