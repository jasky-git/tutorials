import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-numeric-separator"],
});
*/

//ReactDOM.render(<App />, document.getElementById('root'));

const myfirstelement = <h1>Hello React!</h1>

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
