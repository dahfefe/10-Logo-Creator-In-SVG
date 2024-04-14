const Square = require('../lib/Square');

describe('Square', () => {
  test('should render blue square', () => {
    const expected = ['<rect width="100" height="100" fill="blue" />'];
    const shape = new Square();
    shape.setColor("blue");

    const result = shape.render();

    expect(result).toEqual(expected);
  });
});