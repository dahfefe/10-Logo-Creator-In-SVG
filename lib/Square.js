const LogoInputs = require('./LogoInputs');   // import our Shape class

class Square extends LogoInputs {   
  render() {
    return `<rect width="100" height="100" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;