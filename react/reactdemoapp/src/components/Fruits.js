import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Create a Class Component and Constructor
class Fruits extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h3>Fruits are {this.state.color} Tasty!</h3>;
  }
}

class Apples extends React.Component {
  render() {
    return "Apples";
  }
}

ReactDOM.render(<Fruits />, document.getElementById('firstcompele'));

//Components in Components
class FruitBasket extends React.Component {
  render() {
    return (
      <div>
        <h2>FruitBasket have all the { this.props.color } <Apples/></h2>
        <br></br>
      </div>
    );
  }
}

ReactDOM.render(<FruitBasket color="yellow"/>, document.getElementById('secondcompele'));

export default Fruits;