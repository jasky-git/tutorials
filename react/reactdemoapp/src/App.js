import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// function Appl() {
//   return (
//     <div className="App">
//       {
//         //<img src={logo} className="App-logo" alt="logo" />
//       }
//       <h1>Hello World!</h1>
//       <div>Test</div>
//     </div>
//   );
// }

class Appl extends React.Component {
  render() {
    return <h3>To call component this from App.js</h3>
  }
}

//Doesn't need to be same as filename, but need to be same as the Class or Function name
export default Appl;
