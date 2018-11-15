import React, { Component } from "react";

var audio = {};
const playAudio = options => {
  if (!audio[options.name]) {
    audio[options.name] = new Audio(options.url);
    
  } 
  audio[options.name].pause();
  audio[options.name].play();
};

// function stopAudio(options) {
//   audio[options.name].stop();

//   delete audio[options.name];
// }
// var options = {};

export class SoundEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      url: this.props.url
    };
  }

  componentDidMount() {
    playAudio(this.state);
  }

  render() {
    return <div name={this.state.name} />;
  }
}

export default SoundEffect;
