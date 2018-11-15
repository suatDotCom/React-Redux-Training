import React, { Component } from "react";
import { Arwes, Loading, createTheme, ThemeProvider } from "arwes";

import arwesPattern from "../../assets/img/glow.png";
import arwesBg from "../../assets/img/background.jpg";

import soundSettings from "../../variables/soundSettings.jsx";
import SoundEffect from "../../components/SoundEffect/SoundEffect.js";

export class LoaderGeneral extends Component {
  render() {
    return (
      <div id="loadingComponent">
        <SoundEffect
          name="pageLoad"
          url={soundSettings.players.click.sound.src[0]}
        />
        <ThemeProvider theme={createTheme()}>
          <Arwes animate background={arwesBg} pattern={arwesPattern}>
            <Loading animate full={true} />
          </Arwes>
        </ThemeProvider>
      </div>
    );
  }
}

export default LoaderGeneral;
