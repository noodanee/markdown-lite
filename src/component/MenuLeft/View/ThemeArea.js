import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL} from "../../../utils/constant";
import "../common.css";

@inject("view")
@observer
class ThemeArea extends Component {
  handleClick = () => {
    const {isStyleEditorOpen} = this.props.view;
    this.props.view.setStyleEditorOpen(!isStyleEditorOpen);
  };

  render() {
    return (
      <div id="lite-menu-theme-area" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag">{this.props.view.isStyleEditorOpen && <span>{RIGHT_SYMBOL}</span>}</span>
          <span className="lite-menu-name">主题CSS区域</span>
        </span>
      </div>
    );
  }
}

export default ThemeArea;
