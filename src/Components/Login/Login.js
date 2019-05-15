import React, { Component } from "react";

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
    try {
      const loginResponse = await fetch("/users/login", {
        method: "POST",
        credentials: "include", // on every single request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse);
      if (parsedResponse.success) {
        // this is how we programatically change routes in a component
        // that is rendered by a route component check the app.js to see the login
        // its inside a route
        this.props.props.history.push("/");
        console.log("pushed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" name="username" onChange={this.handleChange} />
        <label htmlFor="password">password</label>
        <input type="text" name="password" onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
