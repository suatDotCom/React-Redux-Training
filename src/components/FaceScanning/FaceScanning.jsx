import "../../assets/css/face-scanner.css";

import React, { Component } from 'react';

export class FaceScanning extends Component {
  render() {
    return (
        <div className="face-scanner-content">
          <div className="face-scanner-container">
            <div className="scanner">
              <div
                className="scanner_img scan-animate"
                style={{
                  background: this.props.imageUrl ? "url('"+this.props.imageUrl+"')" : null,
                  backgroundPosition:"center center",
                  backgroundSize:"cover",
                  backgroundRepeat:"no-repeat"
                }}
              />
            </div>
          </div>
        </div>
      );
  }
}
export default FaceScanning