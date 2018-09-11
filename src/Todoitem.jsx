import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { content } = this.props;
    return <li onClick={this.del.bind(this)}>{content}</li>;
  }
  del() {
    this.props.del(this.props.index);
  }
}
