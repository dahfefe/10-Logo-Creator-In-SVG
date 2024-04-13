const Shape = require('./Shape');   // import our Shape class

class Triangle extends Shape {   
  render() {
    return `<header class="header"><h1>Todo Today</h1><p>${formatDate(
      new Date()
    )}</p></header>`;
  }
}

module.exports = Triangle;