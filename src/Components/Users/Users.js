import React, { Component } from "react";

class Users extends Component {
  state = {
    users: {}
  };

  async componentDidMount() {
    const users = await fetch("/users");
    const parsedUsers = await users.json();
    this.setState({
      users: parsedUsers
    });
  }
  render() {
    console.log(typeof this.state.users);
    const data = this.state.users;
    console.log(data.users && data.users);

    return (
      <div>
        {data.users &&
          data.users.map((user, i) => <h1 key={i}>{user.username}</h1>)}
      </div>
    );
  }
}

export default Users;
