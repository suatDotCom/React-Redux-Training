import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";

import { Login } from "../containers/Login";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

import { connect } from "react-redux";
import { authStatus, authStatusUpdate } from "../redux/actions/auth.action.jsx";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("authData") &&
        JSON.parse(sessionStorage.getItem("authData")).isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} {...this.props} />
          <PrivateRoute
            path="/"
            component={DashboardLayout}
            auth={this.props.authStates.isAuthenticated}
            {...this.props}
          />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { authStatus, authStatusUpdate }
)(Routes);
