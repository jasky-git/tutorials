import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import createReactClass from "create-react-class";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import TodoApp from 'components/TodoApp';
import Fruits from 'components/Fruits';
import MyNavbar from 'components/MyNavbar';
import LikeButton from 'components/Like_button';
import * as serviceWorker from './serviceWorker';
// import jquery from "jquery";

//JSX allows you to write HTML tags inside the JavaScript code

/*
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-numeric-separator"],
});
*/

//The root node is the html element where you want to display the result.
//It is like a container for content managed by React.
//ReactDOM.render(<App />, document.getElementById('root'));

//Without JSX
//const myelement = React.createElement('h1', {}, 'Hello React without JSX!');

//With JSX
const myfirstelement = <h1>Hello, This is an overview of React!</h1>;
ReactDOM.render(myfirstelement, document.getElementById('root'));


//Appointing method to mysecondelement
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}

const mycars = new Model("Ford", "Mustang");
const mysecondelement = mycars.show();
ReactDOM.render(mysecondelement, document.getElementById('secondelement'));

const mythirdelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

ReactDOM.render(mythirdelement, document.getElementById('thirdelement'));

//Numeric can be added within {} curly brackets
const myfourthelement = <h3>React is {5 + 5} times better with JSX<hr></hr></h3>;

ReactDOM.render(myfourthelement, document.getElementById('fourthelement'));

// const navigbar = <nav><h2>My Nav bar</h2></nav>;
// ReactDOM.render(navigbar, document.getElementById('navig'));

//Closing /> tag within input
//const myfifthelement = <p>Name: <input id="name" type="text"/></p>;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
