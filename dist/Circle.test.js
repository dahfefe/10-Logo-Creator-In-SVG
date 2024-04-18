const Circle = require('../lib/Circle');

describe('Circle', () => {
  test('should render blue circle when user selects "blue" for shape color', () => {
    const expected = `
    
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="blue" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">FST</text>
  
    </svg>
    
    `;

    const instance = new Circle(
      {
        text: 'FST',
        textColor: 'red',
        shape: 'circle',
        shapeColor: 'blue'
      }
    );
    console.log(instance);

    const result = instance.render();

    expect(result).toEqual(expected);

  });
});


/*
const instance = new Circle({
  text: 'FST',
  textColor: 'red',
  shape: 'circle',
  shapeColor: 'blue'})
console.log(instance);
*/
