import React from "react";
import { Arwes, Row, Col } from "arwes";
import { Sidebar } from "../../components/Sidebar";
import arwesPattern from "../../assets/img/glow.png";
import arwesBg from "../../assets/img/background.jpg";

const styles = {
  headerTitle: {
    padding: "4vh",
    letterSpacing: "5px",
    fontFamily: "Orbitron, sans-serif"
  },
  dataTitle: {
    textTransform: "uppercase",
    textShadow: "1px 1px 20px rgba(84, 215, 217, 0.6)"
  }
};

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="app-container">
        <i className="shine-effect" />
        <Arwes animate background={arwesBg} pattern={arwesPattern}>
          <Col l={3}>
            <Sidebar />
          </Col>
          <Row>
            <Col
              m={4}
              l={4}
              offset={["l4"]}
              s={12}
              className="text-center"
              style={{ marginTop: "15vh" }}
            />
          </Row>
        </Arwes>
      </div>
    );
  }
}

export default Dashboard;