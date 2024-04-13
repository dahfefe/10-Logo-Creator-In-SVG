const Circle = require('../lib/Circle');

describe('Circle', () => {
  test('should render blue circle', () => {
    const expected = ['<circle cx="150" cy="100" r="80" fill="blue"/>'];
    const shape = new Circle();
    shape.setColor("blue");

    const result = shape.render();

    expect(result).toEqual(expected);
  });
});