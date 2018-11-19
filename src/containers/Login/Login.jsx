import React, { Component } from "react";
import { Arwes, Row, Col, Footer, Link } from "arwes";
import { connect } from "react-redux";
import {
  authStatus,
  authStatusUpdate
} from "../../redux/actions/auth.action.jsx";

import arwesPattern from "../../assets/img/glow.png";
import arwesBg from "../../assets/img/background.jpg";

import { LoginForm } from "../../components/Login";

import authAPI from '../../API/authAPI.jsx';
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginProgress: false
    };
  }
  handleLogin(e) {
    e.preventDefault();
    let errorNode = document.querySelector(".error-text");

    if (this.validInputs()) {
      document.querySelectorAll("#scanning")[0].classList.add("scan-effect");

      this.setState({
        loginProgress: true
      });

      
      authAPI.userLogin().then((response) => console.log(response.JSON()))
      .catch(err => console.error(err))
      
      sessionStorage.setItem("authData", JSON.stringify({ isAuth: true }));

      //global auth state update

      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 4000);

      errorNode.classList.add("d-none");
    } else {
      errorNode.innerHTML = "Gerekli alanları doldurunuz!";
      errorNode.classList.remove("d-none");
    }
  }

  validInputs() {
    let status = true;
    document.querySelectorAll("input").forEach(node => {
      if (node.hasAttribute("required") && node.value.length < 1) {
        node.classList.add("error-input");
        status = false;
      } else node.classList.remove("error-input");
    });

    return status;
  }

  componentWillMount() {
    if (sessionStorage.getItem("authData"))
      this.props.history.push("/dashboard");
  }

  render() {
    return (
      <Arwes animate background={arwesBg} pattern={arwesPattern}>
        <div className="app-container">
          <i className="shine-effect" />

          <Row>
            <Col
              m={4}
              l={4}
              offset={["l4"]}
              s={12}
              className="text-center"
              style={{ marginTop: "15vh" }}
            >
              <LoginForm
                handleLogin={this.handleLogin.bind(this)}
                loginProgress={this.state.loginProgress}
              />
            </Col>
          </Row>
        </div>
        <Footer
          animate
          id="footer"
          style={{ height: 100 }}
          className="d-none d-sm-block"
        >
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

const mapStateToProps = state => {
  console.log("login form >>>>", state);
  return {
    authStates: state.authStates
  };
};

export default connect(
  mapStateToProps,
  { authStatus, authStatusUpdate }
)(Login);
// export default Login;
