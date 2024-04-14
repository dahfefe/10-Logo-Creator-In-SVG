const LogoInputs = require('./LogoInputs');   // import our Shape class

// getting the values
class Circle extends LogoInputs {   
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;