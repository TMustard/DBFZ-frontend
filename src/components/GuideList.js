import React, { Component } from "react";
import Guide from "./Guide";

class GuideList extends Component {
  state = {
    editing: -1,
    expanded: -1,
    showGuides: false
  };

  showGuides = event => {
    this.setState({ showGuides: !this.state.showGuides });
  };

  editGuide = id => {
    console.log("editGuide", id);
    this.setState({ editing: id });
  };

  expandGuide = id => {
    console.log("expandGuide", id);
    this.setState({ expanded: id, editing: -1 });
  };

  render() {
    return (
      <div className="guide-wrapper">
        <h2 className="guides" onClick={this.showGuides}>
          Guides
        </h2>
        {this.state.showGuides ? (
          <ul className="guide-list">
            {this.props.guideList.map(guide => (
              <Guide
                key={guide.id}
                editGuide={this.editGuide}
                expandGuide={this.expandGuide}
                getGuides={this.props.getGuides}
                {...guide}
                {...this.state}
              />
            ))}
          </ul>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default GuideList;
