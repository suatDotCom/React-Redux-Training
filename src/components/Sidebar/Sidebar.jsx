import React, { Component } from "react";
import "../../assets/css/custom-sidebar.css";
import { Link } from "arwes";
import { Animated } from "react-animated-css";
export class Sidebar extends Component {
  render() {
    return (
      <Animated animationIn="fadeInLeft" animationInDelay={500}>
        <div className="custom-sidebar text-center">
          <div className="sidebar-header" />
          <div className="sidebar-content">
            <h3 style={{marginTop:40}}>
              <Link href="#">Dashboard</Link>
              
            </h3>
            <h3 style={{marginTop:40}}>
              <Link href="#">Images</Link>
              
            </h3>
            <h3 style={{marginTop:40}}>
              <Link href="#">Reports</Link>
              
            </h3>
            <h3 style={{marginTop:40}}>
              <Link href="#">Help</Link>
              
            </h3>
          </div>
          <div className="sidebar-footer" >
          
              <Link href="#" style={{fontSize:"0.6rem"}}>Suat ÖZÇELİK</Link>
              
           </div>
        </div>
      </Animated>
    );
  }
}

export default Sidebar;
