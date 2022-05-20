import React, { Component } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Panner from "./Panner";

class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div className="Container">
        <div className="header">
          <Header />
        </div>
        <div className="panner">
          <Panner />
        </div>
        <div className="row text-center">
          <div className="col-3">
            <Body />
          </div>
          <div className="col-3">
            <Body />
          </div>
          <div className="col-3">
            <Body />
          </div>
          <div className="col-3">
            <Body />
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default BaiTapThucHanhLayout;
