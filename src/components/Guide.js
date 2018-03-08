import React, { Component } from "react";

class Guide extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    guide: this.props.guide
  };

  showForm = event => {
    event.target.classList.toggle("hidden");
    event.target.nextSibling.classList.toggle("hidden");
  };

  handleChange = event => {
    this.setState({ guide: event.target.value });
  };

  updateGuide = event => {
    event.preventDefault();
    let id = this.state.id;
    let guide = this.state.guide;
    return fetch("http://localhost:3000/guides/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        guide: guide
      })
    }).then(response => this.props.getGuides(response));
    // .then(response => this.showForm(event, response));
  };

  render() {
    return (
      <li>
        <strong>{this.props.name}</strong>
        <p>{this.props.guide}</p>
        <button id="delete-tip" onClick={this.showForm}>
          Edit
        </button>

        <form id="update-form" className="hidden">
          <button id="submit-update" onClick={this.updateGuide}>
            Submit
          </button>
          <textarea id="update-form" onChange={this.handleChange}>
            {this.props.guide}
          </textarea>
        </form>
      </li>
    );
  }
}
// Guide.defaultProps = {
//   onSave() {}
// };
export default Guide;
