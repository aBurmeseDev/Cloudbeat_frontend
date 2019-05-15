import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
        this.state.logged ?{" "}
        <Redirect to={`/users/${this.props.currentUser._id}`} /> :
        <RegisterForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={username}
          password={password}
        />
      </div>
    );
  }
}
const RegisterForm = ({ handleChange, handleSubmit, username, password }) => (
  <form onSubmit={e => this.onSubmit}>
    <label htmlFor="username">username</label>
    <input
      type="text"
      name="username"
      onChange={e => this.handleChange(e)}
      value={username}
    />
    <label htmlFor="password">password</label>
    <input
      type="password"
      name="password"
      onChange={e => this.handleChange(e)}
      value={password}
    />
    <button type="submit">submit</button>
  </form>
);

export default Register;
