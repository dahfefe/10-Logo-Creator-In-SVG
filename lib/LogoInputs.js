
class LogoInputs {
  constructor({text, textColor}) {
    
    this.text = text;
    this.textColor = textColor;
    
    if (0 <= text.length > 3) {
      throw new Error('Text logo must be 1-3 characters in length.');
    }
  }
}

module.exports = LogoInputs;