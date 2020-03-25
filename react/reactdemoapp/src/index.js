import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//JSX allows you to write HTML tags inside the JavaScript code

/*
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-numeric-separator"],
});
*/

//The root node is the html element where you want to display the result.
//It is like a container for content managed by React.
//ReactDOM.render(<App />, document.getElementById('root'));

const myfirstelement = <h1>Hello React!</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'));

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
ReactDOM.render(mysecondelement, document.getElementById('root'));

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

ReactDOM.render(mythirdelement, document.getElementById('secondelement'));

// ReactDOM.render(<p>Hellox</p>, document.getElementById('test1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
