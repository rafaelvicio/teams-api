import React, { Component } from "react";
import { connect } from "react-redux";

import { buscaTeam } from "../store/actions/busca-teams";

import SearchBar from "../componentes/SearchBar";
import TeamList from "../componentes/TeamList";
import TeamListDetail from "../componentes/TeamDetail";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
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
                <Link to="/perfil">Perfil</Link>
              </div>
            </div>
            <div className="ui vertical divider" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buscaTeam: termo => dispatch(buscaTeam(termo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
