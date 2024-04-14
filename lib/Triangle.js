const LogoInputs = require('./LogoInputs');   // import our Shape class

class Triangle extends LogoInputs {   
  render() {
    return `<polygon points="100,70 50,180 150,180" fill="${shapeColor}" />`;
  }
}

module.exports = Triangle;