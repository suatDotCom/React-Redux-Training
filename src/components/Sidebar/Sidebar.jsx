import React, { Component } from "react";
import "../../assets/css/custom-sidebar.css";
import { Link, Loading } from "arwes";
import { Animated } from "react-animated-css";
import SoundEffect from "../SoundEffect/SoundEffect.js";
import soundSettings from "../../variables/soundSettings";

import dashboardRoutes from "../../routes/dashboardRoutes.jsx";
export class Sidebar extends Component {
  handleLogout() {
    sessionStorage.removeItem("authData");
  }

  render() {
    return (
      <Animated animationIn="fadeInLeft" animationInDelay={500}>
        <SoundEffect
          name="sidebarSound"
          url={soundSettings.players.deploy.sound.src[0]}
        />
        <div className="custom-sidebar text-center">
          <div className="sidebar-header">
            <Loading
              animate
              style={{ position: "absolute", left: 50, marginTop: -3 }}
            />
          </div>
          <div className="sidebar-content">
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
              return (
                <h3 style={{ marginTop: 40 }} key={key}>
                  <Link href={prop.path} className={this.props.location.pathname === prop.path ? "glow" : null }>
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </Link>
                </h3>
              )
            })}
          </div>
          <div className="sidebar-footer">
            <Link
              href="/login"
              onClick={this.handleLogout}
              style={{ marginLeft: "2rem" }}
            >
              Logout
            </Link>
          </div>
        </div>
      </Animated>
    );
  }
}

export default Sidebar;
