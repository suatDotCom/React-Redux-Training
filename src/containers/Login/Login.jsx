import React, { Component } from "react";
import { Arwes, Row, Col, Footer, Link } from "arwes";

import { connect } from 'react-redux'
import {authStatus, authStatusUpdate} from '../../redux/actions/auth.action.jsx';

import arwesPattern from "../../assets/img/glow.png";
import arwesBg from "../../assets/img/background.jpg";

import { LoginForm } from "../../components/Login";

export class Login extends Component {
 
  render() {
    return (
      <Arwes animate background={arwesBg} pattern={arwesPattern}>
        <div className="app-container">
          <i className="shine-effect" />

          <Row />
          <Row>
            <Col
              m={4}
              l={4}
              offset={["l4"]}
              s={12}
              className="text-center"
              style={{ marginTop: "15vh" }}
            >
              <LoginForm />
            </Col>
          </Row>
        </div>
        <Footer animate id="footer" style={{height:100}} className="d-none d-sm-block">
        <Row className="p-5">
        <Col s={12} m={12} l={12} className="text-center">
          <Link href="#">Suat ÖZÇELİK</Link>
          </Col>
          </Row>
        </Footer>
      </Arwes>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('login form >>>>', state)
  return {
    authStates: state.authStates
  }
}

export default connect(mapStateToProps, {authStatus, authStatusUpdate})(Login);
// export default Login;