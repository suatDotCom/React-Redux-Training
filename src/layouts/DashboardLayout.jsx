import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import dashboardRoutes from "../routes/dashboardRoutes.jsx";
import { Arwes, Col, Row, Header, Heading, Loading } from "arwes";

import arwesPattern from "../assets/img/glow.png";
import arwesBg from "../assets/img/background.jpg";

import { Animated } from "react-animated-css";

const styles = {
  headerTitle: {
    padding: "4vh",
    letterSpacing: "5px",
    fontFamily: "Orbitron, sans-serif"
  }
};
export class DashboardLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <i className="shine-effect d-none d-sm-block" />
        <Arwes animate background={arwesBg} pattern={arwesPattern}>
          <Row>
            <Header
              animate
              className="d-none d-sm-block"
              style={{ height: 120, marginTop: "-10px" }}
            >
              <div>
                <h1 className="heading" data-target-resolver />
                <Heading
                  node="h1"
                  style={styles.headerTitle}
                  className="text-center glow"
                >
                  &lt; Infoline Image Processing &gt;
                </Heading>
                <Loading animate small />
                <div style={{ position: "absolute", width: 800, top: 50 }}>
                  <Loading animate full />
                </div>
              </div>
            </Header>
          </Row>
          <Row>
            <Col l={3} s={12}>
              <Sidebar {...this.props} />
            </Col>
            <Col l={9}>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDelay={1000}
              >
                <div id="main-panel" className="main-panel" ref="mainPanel">
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
