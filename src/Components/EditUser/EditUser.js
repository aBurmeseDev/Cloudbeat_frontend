import React, { Component } from "react";

class Edit extends Component {
  state = {
    username: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteUser = async e => {
    const delUser = await fetch(`/users/${this.props.currentUser._id}`, {
      method: "DELETE"
    });
    this.props.doLogoutCurrentUser();
    console.log(delUser);
  };

  updateUser = async e => {
    e.preventDefault();
    const updatedUser = await fetch(`/users/${this.props.currentUser._id}`, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify({ username: this.state.username }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const updateUserJson = await updatedUser.json();
    this.props.doSetCurrentUser(updateUserJson.updateUser);
  };

  render() {
    return (
      <form onSubmit={e => this.updateUser(e)} style={{ marginTop: "7rem" }}>
        <h4>edit username</h4>
        <input
          onChange={this.changeHandler}
          type="text"
          name="username"
          id="loginforms"
          placeholder="newname"
          autoComplete="off"
          value={this.state.username}
        />
        <br />
        <button
          type="submit"
          className="btn waves-effect waves-light"
          value="Submit"
        >
          Update
        </button>{" "}
        <br />
        <button
          type="submit"
          onClick={this.deleteUser}
          className="btn waves-effect waves-light"
        >
          delete user
        </button>
      </form>
    );
  }
}

export default Edit;
