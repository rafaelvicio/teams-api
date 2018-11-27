import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import SearchBar from "./componentes/SearchBar";
import TeamList from "./componentes/TeamList";
import TeamListDetail from "./componentes/TeamDetail";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <SearchBar />
        <TeamList />
        <TeamListDetail />
      </div>
      </Provider>
    );
  }
}

export default App;
