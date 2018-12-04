import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "./store/actions/auth";

import requireAuth from "./componentes/auth/requireAuth";

import Home from "./componentes/Home";
import Perfil from "./componentes/Perfil";
import SignIn from "./componentes/SignIn";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/perfil" component={requireAuth(Perfil)} />
          <Route path="/login" component={SignIn} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
