

const Square = require('../lib/Square');

describe('Square', () => {
  test('should render blue square with letters FST in red text', () => {
    const expected = 

    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="110" fill="blue" />
  
    <text x="150" y="100" font-size ="50" dominant-baseline="middle" text-anchor="middle" fill="red">FST</text>
    
    </svg>`;

    const instance = new Square(
      {
        text: 'FST',
        textColor: 'red',
        shape: 'square',
        shapeColor: 'blue'
      }
    );
    console.log(instance);

    const result = instance.render();

    expect(result).toEqual(expected);
  });
});

