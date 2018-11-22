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

const PrivateRoute = ({ component: Component, state, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("authData") &&
        JSON.parse(sessionStorage.getItem("authData")).token ? (
          <Component {...props} {...state.props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export class Routes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      props : this.props
    }
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} {...this.props} />
          <PrivateRoute
            path="/"
            component={DashboardLayout}
            state={this.state}
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
