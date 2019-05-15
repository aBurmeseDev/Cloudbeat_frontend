import React, { Component } from "react";

import Login from "./Components/Login/Login";

import { Switch, Route, withRouter } from "react-router-dom";

import AppNavbar from "./Components/AppNavbar/AppNavbar";
import * as routes from "./Components/constants/routes";
import Post from "./Components/Post/Post.js";
import Register from "./Components/Register/Register";

class App extends Component {
  state = {
    currentUser: null
  };

  doSetCurrentUser = user =>
    this.setState({
      currentUser: user
    });
  doLogoutCurrentUser = () => {
    this.setState({
      currentUser: null
    });
    this.props.history.push(routes.LOGIN);
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="nav">
        <AppNavbar
          currentUser={this.state.currentUser}
          doLogoutCurrentUser={this.doLogoutCurrentUser}
        />
        <Switch>
          <Route exact path={routes.ROOT} />
          <Route
            exact
            path={routes.REGISTER}
            render={() => (
              <Register
                currentUser={currentUser}
                doSetCurrentUser={this.doSetCurrentUser}
              />
            )}
          />
          <Route exact path={routes.POSTS} render={() => <Post />} />

          <Route
            exact
            path={routes.LOGIN}
            render={props => (
              <Login
                props={props}
                currentUser={this.state.currentUser}
                doSetCurrentUser={this.doSetCurrentUser}
              />
            )}
          />

          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
