import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//This TodoApp is develop without using JSX
const e = React.createElement;
var createReactClass = require('create-react-class');

function TodoItem(props) {
return e("li", null, props.text);
}

var TodoApp = createReactClass({
getInitialState: function() {
    return { items: [], text: "" };
},

handleEditInput: function(evt) {
    this.setState({ text: evt.target.value });
},

handleSubmit: function(evt) {
    evt.preventDefault();
    if (!this.state.text.length) return;
    this.setState(function(prevState) {
    return {
        items: prevState.items.concat({
        id: Math.random() + "",
        text: prevState.text
        }),
        text: ""
    };
    });
},

render: function() {
    return e("div", null, [
    e("h4", { key: "title" }, "To Do List"),
    e("input", {
        key: "input",
        type: "text",
        value: this.state.text,
        onChange: this.handleEditInput
    }),
    e(
        "button",
        { key: "add-todo-btn", onClick: this.handleSubmit },
        "Add ToDo"
    ),
    e(
        "ul",
        { key: "todos" },
        this.state.items.map(item =>
        e(TodoItem, { key: item.id, text: item.text })
        )
    ),
    e("hr")
    ]);
}
});


ReactDOM.render(e(TodoApp), document.getElementById('fifthelement'));

export default TodoApp;