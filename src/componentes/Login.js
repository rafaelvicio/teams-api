import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../store/actions/auth";
import firebaseAPI from "../api/firebase";

class Login extends Component {
  componentDidMount() {
    firebaseAPI
      .login("rafaelvicio@icloud.com", "123456789")
      .then(user => {
        console.log("Sucesso ao fazer login, colocando no props");
        this.props.login(user);
      })
      .catch(err => console.log("Deu erro", err));
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/perfil">Perfil</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: authUser => dispatch(login(authUser))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
