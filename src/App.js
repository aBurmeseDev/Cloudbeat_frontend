import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar/AppNavbar";
import * as routes from "./Components/constants/routes";
import Search from "./Components/FetchData/FetchData";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Root";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Particles from "react-particles-js";
import User from "./Components/Users/Users";

const particleOption = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
};

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
          <Route exact path={routes.ROOT} render={() => <Home />} />
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
          <Route
            exact
            path={routes.SEARCH}
            render={() => <Search currentUser={this.state.currentUser} />}
          />
          <Route
            exact
            path={routes.USERS}
            render={() => <User currentUser={this.state.currentUser} />}
          />

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
        <Particles params={particleOption} />
      </div>
    );
  }
}

export default withRouter(App);
