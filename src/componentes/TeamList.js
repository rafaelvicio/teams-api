import React, { Component } from "react";
import { connect } from "react-redux";

class TeamList extends Component {

  renderVideo(team) {
    return (
      <div>npm s
        <h1>{team.id}</h1>
        <h1>{team.title}</h1>
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
