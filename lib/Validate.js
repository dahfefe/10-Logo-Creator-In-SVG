
class Validate {
  
  isText(text) {          
    if (text === "") {
      return false;
    }  
    return true;
  }
}

module.exports = Validate;