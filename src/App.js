import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { login, logout } from "./store/actions/auth";

import requireAuth from "./componentes/auth/requireAuth";
import firebaseService from "./api/firebase";

import Home from "./componentes/Home";
import Perfil from "./componentes/Perfil";
import Login from "./componentes/Login";

class App extends Component {
  componentWillMount() {
    console.log("Fazendo login...");
    firebaseService.onAuthChange(
      user => {
        if (user) {
          console.log("deu certo!");
          this.props.login(user);
        } else {
          console.log("deu errado!");
          this.props.logout();
        }
      },
      erro => {
        console.log("erru aqui", erro);
      }
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/perfil" component={requireAuth(Perfil)} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: authUser => dispatch(login(authUser)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
