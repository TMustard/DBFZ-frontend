import React, { Component } from "react";
import Form from "./Form";

class Guide extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    guide: this.props.guide,
    getGuides: this.props.getGuides
  };

  render() {
    return (
      <li>
        <strong onClick={() => this.props.expandGuide(this.props.id)}>{this.props.name}</strong>
        <div className={this.props.expanded === this.props.id ? "" : "hidden"}>
          <p>{this.props.guide}</p>
          <button className="update-guide" onClick={() => this.props.editGuide(this.props.id)}>
            Edit
          </button>
        </div>
        <Form {...this.props} />
      </li>
    );
  }
}

export default Guide;
