import React, { Component } from "react";

import Login from "./Components/Login/Login";

import { Switch, Route } from "react-router-dom";

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

  render() {
    return (
      <div className="nav">
        <AppNavbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.REGISTER} render={() => <Register />} />
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

export default App;
