import React, { Component } from 'react';

import '../../assets/css/terminal.css';
import '../../assets/js/terminal.js';

const styles = {
	textColorBlack: {
		color: "black"
	}
}

export class Terminal extends Component {
  render() {
    return (
        // <div className="gradientCont">
		<div className="mainCont">
			<h2 style={styles.textColorBlack}>Login/Register Terminal</h2>
			<h3 style={styles.textColorBlack}>Infoline Bilgi Teknolojileri</h3>
			<div className="terminalCont">
				<div id="terminalReslutsCont">
				</div>
				<form>
					<input id="terminalTextInput" type="text" placeholder="Try typing hi or help..." autoComplete="off" />
				</form>
			</div>
	
		</div>
	// </div>
    )   
  }
}

export default Terminal
