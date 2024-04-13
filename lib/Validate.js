
class Validate {
  
  isText(text) {          
    if (text === "" || text.length > 3) {
      return false;
    }  
    return true;
  }
}

module.exports = Validate;