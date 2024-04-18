
const Index = require('../index');

describe('Index', () => { 

    it('should throw an error when the text string is empty', () => {
      expect(() => {
        const result = new Index("");
      }).toThrow();
    });

    it('should throw an error when more than 3 characters are entered for text', () => {
      expect(() => {
        const result = new Index("sdgsdsd");
      }).toThrow();

    });

});