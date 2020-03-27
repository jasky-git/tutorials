import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Import this module from Like_button.js

/*
    React components has a built-in state object.

    The state object is where you store property values that belongs to the component.

    When the state object changes, the component re-renders.
*/
//Creating the state Object
//The state object is initialized in the constructor
//State is like Session Storage
class Fruitstate extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {brand: "Ford"};
        this.state = {
            brand: "Apple",
            model: "Sweet",
            color: "red",
            country: "australia",
            year: 2020
          };
    }
    //Manipulate the state property
    changeBrand = () => {
        this.setState({brand: "China"});
    }
    render() {
        return (
            <div>
                <h3>My {this.state.brand}</h3>
                <p>
                    It is a {this.state.color}
                    &nbsp;{this.state.model} from {this.state.country}.
                </p>
                <button type="button"
                onClick={this.changeBrand}>
                    Change brand
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Fruitstate/>, document.getElementById('firststate'));

export default Fruitstate;