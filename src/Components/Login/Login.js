import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const loginResponse = await fetch("/users/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json"
      }
    });

    const parsedResponse = await loginResponse.json();
    if (parsedResponse.user) {
      this.props.doSetCurrentUser(parsedResponse.user);
      this.props.history.push("/searchsongs");
    }
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="loginForm">
        <label htmlFor="username">username</label>
        <input type="text" name="username" onChange={this.handleChange} />
        <label htmlFor="password">password</label>
        <input type="text" name="password" onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default withRouter(Login);
