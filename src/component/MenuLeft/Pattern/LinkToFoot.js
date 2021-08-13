import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {parseLinkToFoot} from "../../../utils/editorKeyEvents";
import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("content")
@observer
class Format extends Component {
  handleFormat = () => {
    const {content} = this.props.content;
    parseLinkToFoot(content, this.props.content);
  };

  render() {
    return (
      <div id="lite-menu-link-to-foot" className="lite-menu-item" onClick={this.handleFormat}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">微信外链转脚注</span>
        </span>
        <span className="lite-menu-shortcut">{hotKeys.linkToFoot}</span>
      </div>
    );
  }
}

export default Format;
