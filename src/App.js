import React, { Component } from "react";
import Header from "./components/Header";
import PowerLevels from "./components/PowerLevels";
import TipList from "./components/TipList";
import GuideList from "./components/GuideList";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tips: [],
      guides: []
    };
    this.getTips = this.getTips.bind(this);
    this.getGuides = this.getGuides.bind(this);
  }

  componentDidMount() {
    this.getTips();
    this.getGuides();
  }

  getTips = () => {
    return fetch("http://localhost:3000/tips")
      .then(response => response.json())
      .then(tips => {
        this.setState(tips);
      });
  };

  getGuides = () => {
    return fetch("http://localhost:3000/guides")
      .then(response => response.json())
      .then(guides => {
        this.setState(guides);
      });
  };

  onTipSave = () => {
    this.getTips();
  };

  onGuideSave = () => {
    this.getGuides();
  };

  render() {
    const tipList = this.state.tips;
    const guideList = this.state.guides;

    return (
      <main>
        <Header />
        <PowerLevels />
        <TipList tipList={tipList} onSave={this.onTipSave} />
        <GuideList guideList={guideList} getGuides={this.getGuides} />
        <Footer />
      </main>
    );
  }
}

export default App;
