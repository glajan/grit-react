import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleteProp2.bind(
              this,
              this.props.todoProp.id
            )}
          />
          {this.props.todoProp.title}
        </p>
      </div>
    );
  }
}

Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
};

export default Todo;
