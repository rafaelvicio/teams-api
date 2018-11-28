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

      <div>
      <div className="ui container">
          <div className="ui segment">
            <div className="ui two column very relaxed grid">
              <div className="column">
              <SearchBar />
              <TeamList />
              <TeamListDetail />
              </div>
              <div className="column">
                <h2>Segunda parte</h2>
              </div>
            </div>
            <div className="ui vertical divider" />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
