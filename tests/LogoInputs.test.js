
const LogoInputs = require('../lib/LogoInputs');

describe('LogoInputs', () => { 

    it('should throw an error when the text string is empty', () => {
      expect(() => {
        const result = new LogoInputs("");
      }).toThrow();
    });

    it('should throw an error when more than 3 characters are entered for text', () => {
      expect(() => {
        const result = new LogoInputs("sdgsdsd");
      }).toThrow();

    });

});