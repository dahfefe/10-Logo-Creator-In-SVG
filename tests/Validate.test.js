
const Validate = require('../lib/Validate');

describe('Validate', () => {
  describe('isText', () => {  
    it('should return false when given an empty string', () => {
      const instance = new Validate();  
      const result = instance.isText("");
      expect(result).toEqual(false);
    });
  });

  describe('isText', () => {  
    it('should return false when user inputs more than 3 characters', () => {
      const instance = new Validate();  
      const result = instance.isText(ABNF);
      expect(result).toEqual(false);
    });
  });
});