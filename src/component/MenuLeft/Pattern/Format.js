import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {formatDoc} from "../../../utils/editorKeyEvents";
import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("content")
@observer
class Format extends Component {
  handleFormat = () => {
    const {content} = this.props.content;
    formatDoc(content, this.props.content);
  };

  render() {
    return (
      <div id="lite-menu-format" className="lite-menu-item" onClick={this.handleFormat}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">格式化文档</span>
        </span>
        <span className="lite-menu-shortcut">{hotKeys.format}</span>
      </div>
    );
  }
}

export default Format;
