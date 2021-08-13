import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("dialog")
@observer
class Image extends Component {
  showModal = () => {
    this.props.dialog.setImageOpen(true);
  };

  render() {
    return (
      <div id="lite-menu-image" className="lite-menu-item" onClick={this.showModal}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">图片</span>
        </span>
        <span className="lite-menu-shortcut">{hotKeys.image}</span>
      </div>
    );
  }
}

export default Image;
