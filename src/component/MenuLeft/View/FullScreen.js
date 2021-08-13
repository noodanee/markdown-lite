import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import "../common.css";

@inject("navbar")
@observer
class FullScreen extends Component {
  // fullScreen or !fullScreen
  toggleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const cancelFullScreen =
      doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  };

  render() {
    return (
      <div id="lite-menu-full-screen" className="lite-menu-item" onClick={this.toggleFullScreen}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">全屏</span>
        </span>
      </div>
    );
  }
}

export default FullScreen;
