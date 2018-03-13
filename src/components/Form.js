import React, { Component } from "react";

class Form extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    guide: this.props.guide
  };

  updateGuide = event => {
    event.preventDefault();
    let id = this.state.id;
    let guide = this.state.guide;
    return fetch("https://dbfz.herokuapp.com/guides/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        guide: guide
      })
    })
      .then(response => this.props.getGuides())
      .then(response => this.props.expandGuide(-1));
  };

  handleChange = event => {
    this.setState({ guide: event.target.value });
  };

  render() {
    return (
      <div className={this.props.editing === this.props.id ? "" : "hidden"}>
        <button className="submit-update" onClick={this.updateGuide}>
          Submit
        </button>
        <form id="update-form">
          <textarea id="update-form" onChange={this.handleChange} defaultValue={this.props.guide} />
        </form>
      </div>
    );
  }
}

export default Form;
