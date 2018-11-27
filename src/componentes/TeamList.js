import React, { Component } from "react";
import { connect } from "react-redux";

class TeamList extends Component {

  renderVideo(team) {
    return (
      <div>
        <h1>{team.nome}</h1>
        <h1>{team.slug}</h1>
      </div>

    )
  }

  render() {
    return  (
      <div>
      {
        this.props.teams
      }
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.busca.teams,
    carregando: state.busca.carregando,
    error: state.busca.error
  }
}

export default connect(mapStateToProps, null)(TeamList);
