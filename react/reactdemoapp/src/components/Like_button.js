// 'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    //Without JSX
    /*
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    */

    //With JSX
    return (
        <button onClick={() => this.setState({ liked: true })}>
            Like
        </button>
    );

  }
}





const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

export default LikeButton;