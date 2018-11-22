import React from "react";
import "../../assets/css/face-scanner.css";
import { Row, Col } from "arwes/lib/Grid";
import Words from "arwes/lib/Words";
export class Dashboard extends React.Component {
  render() {
    return (
      <div>
      <Row>
        <Col l={5} m={5} s={12}>
        <div className="face-scanner-content">
        <div className="face-scanner-container">
          <div className="scanner">
            <div className="scanner_img scan-animate" />
          </div>
        </div>
      </div>
        </Col>
        <Col l={5} m={5} s={12}>
        <div className="face-scanner-content">
        <div className="face-scanner-container">
          <div className="scanner">
            <div className="scanner_img scan-animate" style={{background:"url('https://image.shutterstock.com/image-vector/head-person-3d-grid-human-450w-521918623.jpg')", backgroundPosition:"center center", backgroundSize:350}} />
          </div>
        </div>
      </div>
        </Col>
      </Row>

      </div>
    );
  }
}

export default Dashboard;
