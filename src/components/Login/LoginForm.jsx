import React, { Component } from "react";
import { Frame, Line, Words, Button, Link, Loading } from "arwes";
import { Animated } from "react-animated-css";
import { connect } from "react-redux";
import {
  authStatus,
  authStatusUpdate
} from "../../redux/actions/auth.action.jsx";

const styles = {
  authButtons: {
    width: "100%",
    minWidth: "7vw",
    minHeight: "5vh"
  }
};

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnLayer: "primary",
      btnDisabled: false
    };
  }

  componentDidUpdate() {
    if (this.props.loginProgress && !this.state.btnDisabled) {
      this.setState({
        btnLayer: "success",
        btnDisabled: true
      });
    }
  }

  render() {
    return (
      <Frame animate level={3} corners={4} layer="primary" id="loginContainer">
        <span id="scanning" />
        <div style={{ padding: "20px 40px", fontSize: "2rem" }}>
          <h3 style={{ fontFamily: "Rajdhani" }}>
            <Words animate>Giris Ekranı</Words>
          </h3>
        </div>
        <Line animate />

        <div className="scifiUI" style={{ marginTop: 50 }}>
          <div className="form-group row">
            <label htmlFor="txtUsername" className="col-4 col-form-label">
              <Words animate>Kullanıcı Adı</Words>
            </label>

            <div className="col-7">
              <Animated
                animationIn="flash"
                animationOut="fadeOut"
                animationInDelay={600}
                isVisible={true}
              >
                <input
                  className="form-control text-center"
                  type="text"
                  id="txtUsername"
                  required
                />
              </Animated>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="txtPassword" className="col-4 col-form-label">
              <Words animate>Sifre</Words>
            </label>

            <div className="col-7">
              <Animated
                animationIn="flash"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={400}
              >
                <input
                  className="form-control text-center"
                  type="password"
                  id="txtPassword"
                  required
                />
              </Animated>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-5 offset-5">
              <Button
                animate
                layer={this.state.btnLayer}
                onClick={this.props.handleLogin}
                disabled={this.state.btnDisabled}
                style={styles.authButtons}
              >
                Giris Yap
              </Button>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-10 text-right">
              <Link href="#">Kayıt Ol</Link>.
            </div>
          </div>

          <div className="form-group row">
            <div className="col-12">
              <div className="error-text d-none">
              
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-12 text-center">
              <Loading
                animate
                className={!this.props.loginProgress ? "d-none" : ""}
              />
            </div>
          </div>
        </div>
      </Frame>
    );
  }
}

const mapStateToProps = state => {
  console.log("login form >>>>", state);
  return {
    authStates: state.authStates
  };
};

const mapDispatchToProps = {
  authStatus,
  authStatusUpdate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

// export default LoginForm;
