import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL} from "../../../utils/constant";
import "../common.css";

@inject("view")
@observer
class PreviewArea extends Component {
  handleClick = () => {
    const {isPreviewAreaOpen} = this.props.view;
    this.props.view.setPreviewAreaOpen(!isPreviewAreaOpen);
  };

  render() {
    return (
      <div id="lite-menu-preview-area" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag">{this.props.view.isPreviewAreaOpen && <span>{RIGHT_SYMBOL}</span>}</span>
          <span className="lite-menu-name">预览区域</span>
        </span>
      </div>
    );
  }
}

export default PreviewArea;
