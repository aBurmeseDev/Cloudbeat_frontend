import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar/AppNavbar";
import * as routes from "./Components/constants/routes";
import Search from "./Components/FetchData/FetchData";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Root";
import User from "./Components/Users/Users";
import Edit from "./Components/EditUser/EditUser";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

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
      <div className="nav" style={{ height: "calc(100% - 60px)" }}>
        <main>
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
              path={routes.EDIT}
              render={() => (
                <Edit
                  doSetCurrentUser={this.doSetCurrentUser}
                  currentUser={this.state.currentUser}
                  doLogoutCurrentUser={this.doLogoutCurrentUser}
                />
              )}
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
          {/* <Particles params={particleOption} className="particles" /> */}
        </main>
        <footer
          class="page-footer"
          style={{ backgroundColor: "rgba(12, 186, 186, 0.2)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="grey-text text-lighten-4">
                  This app is powered by Spotify Web API{" "}
                  <i class="fab fa-spotify" />
                </h5>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">About me</h5>
                <div>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://www.johnlwin.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ paddingRight: "1rem" }}
                  >
                    <i class="fas fa-user-circle fa-3x" />
                  </a>

                  <a
                    class="grey-text text-lighten-3"
                    href="https://github.com/aBurmeseDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ paddingRight: "1rem" }}
                  >
                    <i class="fab fa-github fa-3x" />
                  </a>

                  <a
                    class="grey-text text-lighten-3"
                    href="https://www.linkedin.com/in/john-lwin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ paddingRight: "1rem" }}
                  >
                    <i class="fab fa-linkedin fa-3x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">© 2019 Copyright John Lwin</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
