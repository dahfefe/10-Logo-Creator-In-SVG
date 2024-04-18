
const Index = require('../index');

describe('Index', () => { 

    it('should throw an error when the user inputs an invalid color', () => {
      expect(() => {
        const result = new Index("Koolaid red");
      }).toThrow();
    });

});