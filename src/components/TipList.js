import React, { Component } from "react";

class TipList extends Component {
  showTips = event => {
    event.target.nextSibling.classList.toggle("hidden");
    event.target.nextSibling.nextSibling.classList.toggle("hidden");
  };

  createTip = event => {
    console.log(this.state);
    event.preventDefault();
    fetch("http://localhost:3000/tips", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tip: this.refs.tip.value
      })
    }).then(response => {
      this.props.onSave();
    });
  };

  removeTip = id => {
    return fetch("http://localhost:3000/tips/" + id, {
      method: "DELETE"
    })
      .then(response => response.text)
      .then(response => {
        this.props.onSave();
      });
  };

  render() {
    return (
      <div className="tip-wrapper">
        <h2 className="description" onClick={this.showTips}>
          General Tips
        </h2>
        <form action="#" onSubmit={this.createTip} className="hidden" method="POST">
          <label>Add a Tip: </label>
          <input type="textarea" ref="tip" />
          <input type="submit" id="submit-button" name="" value="submit" />
        </form>
        <ul className="tip-list hidden">
          {this.props.tipList.map(tip => (
            <li key={tip.id}>
              {tip.tip}
              <div>
                <button id="delete-tip" onClick={() => this.removeTip(tip.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
TipList.defaultProps = {
  onSave() {}
};

export default TipList;
