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

import authAPI from "../../API/authAPI.jsx";
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
    errorNode.innerHTML = "";
    
    if (process.env.NODE_ENV == "development") {
      this.setState({
        loginProgress: true
      });

      sessionStorage.setItem(
        "authData",
        JSON.stringify({ status: true, token: "fakeToken" })
      );

      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 4000);

      return;
    }

    if (this.validInputs()) {
      // document.querySelectorAll("#scanning")[0].classList.add("scan-effect");

      this.setState({
        loginProgress: true
      });

      let username = document.getElementById("txtUsername").value;
      let password = document.getElementById("txtPassword").value;

      authAPI
        .userLogin(username, password)
        .then(response => response.data)
        .then(data => {
          if (data.status && data.token) {
            sessionStorage.setItem("authData", JSON.stringify(data));

            setTimeout(() => {
              this.props.history.push("/dashboard");
            }, 4000);

            errorNode.classList.add("d-none");
          } else if (data.message) {
            errorNode.innerHTML = data.message;
            errorNode.classList.remove("d-none");

            this.setState({ loginProgress: false });
          }
        })
        .catch(err => {
          setTimeout(() => {
            errorNode.innerHTML = "Sunucu cevap vermiyor!";
            errorNode.classList.remove("d-none");
            console.error("API ERROR: ", err);
            this.setState({ loginProgress: false });
          }, 2500);
        });
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
    var authData = JSON.parse(sessionStorage.getItem("authData"));
    if (authData && authData.status && authData.token)
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
