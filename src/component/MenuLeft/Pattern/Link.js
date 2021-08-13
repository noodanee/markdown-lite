import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("dialog")
@observer
class Link extends Component {
  showModal = () => {
    this.props.dialog.setLinkOpen(true);
  };

  render() {
    return (
      <div id="lite-menu-link" className="lite-menu-item" onClick={this.showModal}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">链接</span>
        </span>
        <span className="lite-menu-shortcut">{hotKeys.link}</span>
      </div>
    );
  }
}

export default Link;
