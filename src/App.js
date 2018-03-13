import React, { Component } from "react";
import Header from "./components/Header";
import TipList from "./components/TipList";
import GuideList from "./components/GuideList";
import Footer from "./components/Footer";
import { BarChart } from "react-easy-chart";

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
    return fetch("https://dbfz.herokuapp.com/tips")
      .then(response => response.json())
      .then(tips => {
        this.setState(tips);
      });
  };

  getGuides = () => {
    return fetch("https://dbfz.herokuapp.com/guides")
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
        {/* <BarChart
          height={150}
          width={350}
          axisLabels={{ x: "Character", y: "Power Level" }}
          data={[
            { x: "A", y: 20 },
            { x: "B", y: 30 },
            { x: "C", y: 40 },
            { x: "D", y: 20 },
            { x: "E", y: 40 },
            { x: "F", y: 25 },
            { x: "G", y: 5 }
          ]}
        /> */}
        <TipList tipList={tipList} onSave={this.onTipSave} />
        <GuideList guideList={guideList} getGuides={this.getGuides} />
        <Footer />
      </main>
    );
  }
}

export default App;
