import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
// import App from "./components/App";
import { Dashboard } from "./containers/Dashboard";
import { Login } from "./containers/Login/";

import { connect } from 'react-redux'
import {authStatus, authStatusUpdate} from './redux/actions/auth.action.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      //auth control
      -1 < 0 ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export class Routes extends Component {
  constructor(props) {
    super(props);

  }
// componentDidMount() {
//   console.log('this.props :', this.props.authStatusUpdate({isAuthenticated: true}));
// }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
       </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    state
  }
}

export default connect(mapStateToProps, {authStatus, authStatusUpdate})(Routes);
