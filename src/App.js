import React, { Component } from "react";

import SearchBar from "./componentes/SearchBar";
import TeamList from "./componentes/TeamList";
import TeamListDetail from "./componentes/TeamDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <TeamList />
        <TeamListDetail />
      </div>
    );
  }
}

export default App;
