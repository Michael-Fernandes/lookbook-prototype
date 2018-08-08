import './App.css';
import React, { Component } from 'react';
import Header from "./Components/Header/Header";
import Lookbook from "./Components/Wardrobe/Lookbook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
        <Lookbook />
        </div>
      </div>
    );
  }
}

export default App;
