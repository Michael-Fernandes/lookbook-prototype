import React, { Component } from 'react';
import WardrobePage from "./WardrobePage";
import Carousel from "./Carousel"

class Wardrobe extends Component {
  render() {
    return (
        <div className="wardrobe">
            <Carousel />
        </div>
    );
  }
}

export default Wardrobe;
