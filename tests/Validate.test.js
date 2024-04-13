
const Validate = require('../lib/Validate');

describe('Validate', () => {
  describe('isPassword', () => {  
    it('should return false when given an empty string', () => {
      const instance = new Validate();  
      
      const result = instance.isText("");

      expect(result).toEqual(false);
    });
  });
});