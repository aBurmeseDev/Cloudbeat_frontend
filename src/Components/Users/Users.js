import React, { Component } from "react";
import { async } from "q";

class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const users = await fetch("/users");
    const parsedUsers = await users.json();
    console.log(parsedUsers);
    this.setState({
      users: parsedUsers
    });
  }
  render() {
    console.log(typeof this.state.users);
    const something = this.state.users;
    console.log(something.users && something.users);
    something.users &&
      something.users.map((user, i) => <h1 key={i}>{user.username}</h1>);
    return <div />;
  }
}

export default Users;
