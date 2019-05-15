import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as routes from "../constants/routes";

class Register extends Component {
  state = {
    username: "",
    password: "",
    logged: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const registerResponse = await fetch("/users", {
        method: "POST",
        credentials: "include", // on every single request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse);
      if (parsedResponse.user) {
        console.log(parsedResponse);
        this.props.doSetCurrentUser(parsedResponse.user);
        this.setState({
          logged: true
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        {this.state.logged ? (
          <Redirect to={routes.SEARCH} />
        ) : (
          <RegisterForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            username={username}
            password={password}
          />
        )}
      </div>
    );
  }
}
const RegisterForm = ({ handleChange, handleSubmit, username, password }) => (
  <form onSubmit={e => handleSubmit(e)}>
    <label htmlFor="username">username</label>
    <input
      type="text"
      name="username"
      onChange={e => handleChange(e)}
      value={username}
      autoComplete="off"
    />
    <label htmlFor="password">password</label>
    <input
      type="password"
      name="password"
      onChange={e => handleChange(e)}
      value={password}
    />{" "}
    <br />
    <button type="submit" class="btn waves-effect waves-light">
      register
    </button>
  </form>
);

export default Register;
