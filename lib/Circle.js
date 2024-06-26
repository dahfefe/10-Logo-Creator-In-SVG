// const LogoInputs = require('./LogoInputs');   // import our LogoInputs class

// Circle class that renders the appropriate code in svg for a circle logo


// class Circle {     // example of creating the class without destructuring
//   constructor(responses) {   // we can call this parameter whatever we want

//     this.text = responses.text;
//     this.textColor = responses.textColor;   
//     this.shape = responses.shape;
//     this.shapeColor = responses.shapeColor;
//   }


class Circle {   
  constructor({text, textColor, shape, shapeColor}) {   // destructuring here allows us to utilize the keys directly
                                                        // destructuring allows to write less code
    this.text = text;
    this.textColor = textColor;   
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    return `
    
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
    </svg>
    
    `;
  }

}

module.exports = Circle;