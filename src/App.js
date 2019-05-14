import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}
class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        Search
      </div>
    );
  }
}
export default App;
