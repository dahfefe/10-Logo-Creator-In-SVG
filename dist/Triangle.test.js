

const Triangle = require('../lib/Triangle');

describe('Triangle', () => {
  test('should render blue triangle with letters FST in red text', () => {
    const expected = 
    
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <polygon id="triangle" points="150,10 50,200 250,200" />
    </defs>
  
    <use href="#triangle" fill="blue" />
  
    <text x="150" y="140" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">
    FST
    </text>
    </svg>`;
    
    const instance = new Triangle(
      {
        text: 'FST',
        textColor: 'red',
        shape: 'triangle',
        shapeColor: 'blue'
      }
    );
    console.log(instance);

    const result = instance.render();
    console.log(instance.render());

    expect(result).toEqual(expected);
  });
});