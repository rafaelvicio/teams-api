import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/perfil">Perfil</Link>
      </div>
    );
  }
}

export default Login;
