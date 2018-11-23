import React from "react";
import { Row, Col } from "arwes/lib/Grid";
import { FaceScanning } from "../../components/FaceScanning";
export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col l={5} m={5} s={12}>
            <FaceScanning />
          </Col>
          <Col l={5} m={5} s={12}>
            <FaceScanning imageUrl="http://i.dailymail.co.uk/i/pix/2014/04/15/article-2605378-1C8E1E4300000578-300_634x455.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
