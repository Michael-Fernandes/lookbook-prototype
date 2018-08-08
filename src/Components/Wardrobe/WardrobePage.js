import React, { Component } from 'react';
import Outfit from "./Outfit";
import QuickView from "./QuickView";

class WardrobePage extends Component {
  render() {
    return (
        <div className="wardrobe-page">
            <Outfit />
            <QuickView />
        </div>
    );
  }
}

export default WardrobePage;
