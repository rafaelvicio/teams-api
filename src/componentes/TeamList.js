import React, { Component } from "react";
import { connect } from "react-redux";

class TeamList extends Component {
  renderVideo(team) {
    return (
      <div key={team.id}>
        ID: <h1>{team.id}</h1>
        Title: <h1>{team.name}</h1>
        Game: <h2>{team.game_id}</h2>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.teams.map(team => {
          return this.renderVideo(team);
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.busca.teams,
    carregando: state.busca.carregando,
    error: state.busca.error
  };
};

export default connect(
  mapStateToProps,
  null
)(TeamList);
