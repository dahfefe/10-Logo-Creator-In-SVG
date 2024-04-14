// const LogoInputs = require('./LogoInputs');   // import our Shape class

class Square {   
  constructor({text, textColor, shape, shapeColor}) {

    this.text = text;
    this.textColor = textColor;   
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="110" fill="${this.shapeColor}" />
  
    <text x="150" y="100" font-size ="50" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`;
  }
}

module.exports = Square;