
class LogoInputs {
  constructor(text, textColor, shape, shapeColor) {
    
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
          
    if (text === "" || text.length > 3) {
      throw new Error('Please enter only 1-3 characters for the text of the logo.')
    }
  }
}


module.exports = LogoInputs;