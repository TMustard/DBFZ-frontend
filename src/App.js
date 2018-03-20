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
        <form action="your-server-side-code" method="POST">
          <script
            src="https://localhost:3000"
            className="stripe-button"
            data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
            data-amount="999"
            data-name="Stripe.com"
            data-description="Widget"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto"
            data-zip-code="true"
          />
        </form>
        <TipList tipList={tipList} onSave={this.onTipSave} />
        <GuideList guideList={guideList} getGuides={this.getGuides} />
        <Footer />
      </main>
    );
  }
}

export default App;
