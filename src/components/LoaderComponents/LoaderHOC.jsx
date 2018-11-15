import React, { Component } from "react";
import { Loading } from "arwes";
import soundSettings from "../../variables/soundSettings.jsx";
import SoundEffect from "../../components/SoundEffect/SoundEffect.js";

var styles = {
  colorType: {
    alert: { color: "red" },
    success: { color: "green" }
  },
  loadFailText: {
    color: "red",
    margin: "10vh",
    display: "inline-block"
  }
};

export const LoaderHOC = (WrappedComponent, propNameForAsync) => {
  return class LoaderHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        content: (
          <div>
            <Loading animate />
          </div>
        ),
        status: false,
        dataControl: null
      };
    }

    componentDidMount(props){
      const dataControl = setInterval(() => {
        this.props[propNameForAsync] && this.props[propNameForAsync].length > 0
          ? this.setState({
              status: true
            })
          : null;

        this.state.status
          ? this.setState({
              content: (
                <div>
                  <SoundEffect
                    name="componentLoad"
                    url={soundSettings.players.deploy.sound.src[0]}
                  />
                  <WrappedComponent {...this.props} />
                </div>
              )
            })
          : null;
      }, 1000);

      setTimeout(() => {
        clearInterval(dataControl);

        !this.state.status
          ? this.setState({
              content: (
                <div>
                  <SoundEffect
                    name="componentLoadFail"
                    url={soundSettings.players.alert.sound.src[0]}
                  />
                  <span style={styles.loadFailText}>Veriler Yüklenemedi!</span>
                </div>
              )
            })
          : null;
      }, 3000);
    };

    render() {
      return this.state.content;
    }
  };
};

export default LoaderHOC;
