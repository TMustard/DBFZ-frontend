import React, { Component } from "react";
import Guide from "./Guide";

class GuideList extends Component {
  showGuides = event => {
    event.target.nextSibling.classList.toggle("hidden");
  };

  render() {
    return (
      <div className="guide-wrapper">
        <h2 className="guides" onClick={this.showGuides}>
          Character Guides
        </h2>
        <ul className="guide-list hidden">
          {this.props.guideList.map(guide => (
            <Guide
              id={guide.id}
              name={guide.name}
              guide={guide.guide}
              getGuides={this.props.onSave}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default GuideList;
