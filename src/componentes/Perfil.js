import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../store/actions/auth";

class Perfil extends Component {
  componentDidMount() {
    console.log("teste", this.props);
  }

  render() {
    return (
      <div>
        <h1>Perfil</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Perfil);
