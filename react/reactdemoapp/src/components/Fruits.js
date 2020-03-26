import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Create a Class Component
class Fruits extends React.Component {
  render() {
    return <h3>Fruits are Tasty!</h3>;
  }
}

ReactDOM.render(<Fruits />, document.getElementById('firstcompele'));

//Components in Components
class FruitBasket extends React.Component {
  render() {
    return <h2>FruitBasket have all the fruits</h2>
  }
}

ReactDOM.render(<FruitBasket />, document.getElementById('secondcompele'));

export default Fruits;