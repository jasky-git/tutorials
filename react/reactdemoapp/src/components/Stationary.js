import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Introducing Props
//"brand" attribute in the component
class Stationary extends React.Component {
  render() {
    return <h5 color="red">I have a {this.props.brand} Pen</h5>;
  }
}

//add "brand" attribute to the Pen element
const mypen = <Stationary brand="Pilot" />;

ReactDOM.render(mypen, document.getElementById('firstprops'));
//I have a Pilot Pen

class Pencilbox extends React.Component {
  render() {
    const penname = "G2";
    return (
      <div>
        <Stationary brand={penname} />
      </div>
    );
  }
}

ReactDOM.render(<Pencilbox/>, document.getElementById('secondprops'));
//I have a G2 Pen

//Create an object and send it to Stationarybox Component
class Inkpen extends React.Component {
  render() {
  return <h3>{this.props.brand.name} {this.props.brand.model} Pen</h3>
  }
}

class Stationarybox extends React.Component {
  render() {
      const peninfo = {name: "Ink", model: "Fountain"};
      return (
        <div>
          <hr></hr><Inkpen brand={peninfo}></Inkpen>
        </div>
      );
  }
}

ReactDOM.render(<Stationarybox/>, document.getElementById('thirdprops'));
//{Name} {Model} Text
//Ink Fountain Pen

/*
-- Props in the constructor --
If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
*/
class Pencil extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>One {this.props.model} pencil for you.</h2>;
  }
}

ReactDOM.render(<Pencil model="Mechanic"/>, document.getElementById('fourthprops'));


export default Stationary;