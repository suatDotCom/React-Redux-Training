import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import dashboardRoutes from "../routes/dashboardRoutes.jsx";
import { Arwes, Col } from "arwes";

import arwesPattern from "../assets/img/glow.png";
import arwesBg from "../assets/img/background.jpg";
import { Row } from "arwes/lib/Grid";

import { Animated } from "react-animated-css";

export class DashboardLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <i className="shine-effect d-none d-sm-block" />
        <Arwes animate background={arwesBg} pattern={arwesPattern}>
          <Row>
            <Col l={3} s={12}>
              <Sidebar {...this.props} />
            </Col>
            <Col l={9}>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={1000}>
              <div id="main-panel" className="main-panel" ref="mainPanel">
                {/* <Header {...this.props} /> */}
                <Switch>
                  {dashboardRoutes.map((prop, key) => {
                    if (prop.redirect)
                      return (
                        <Redirect from={prop.path} to={prop.to} key={key} />
                      );
                    return (
                      <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                      />
                    );
                  })}
                </Switch>
                {/* <Footer /> */}
              </div>
              </Animated>
            </Col>
          </Row>
        </Arwes>
      </div>
    );
  }
}

export default DashboardLayout;
