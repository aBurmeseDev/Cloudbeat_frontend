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
    const data = this.state.users;

    return (
      <div style={{ marginTop: "4rem" }}>
        {data.users &&
          data.users.map((user, i) => (
            <h5
              key={i}
              style={{
                display: "inline-block",
                paddingLeft: "3rem",
                color: "#ffffff"
              }}
            >
              {" "}
              <i className="fas fa-headphones-alt" />: {user.username}
            </h5>
          ))}
      </div>
    );
  }
}

export default Users;
