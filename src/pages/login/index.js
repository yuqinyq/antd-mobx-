import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { LoginForm } from "./component/LoginForm";



class Login extends Component {

  render() {
    return (
      <div className="qf-login-wrapper">
        <div className="qf-login-content">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
