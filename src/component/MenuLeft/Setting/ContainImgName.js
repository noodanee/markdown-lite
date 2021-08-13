import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL} from "../../../utils/constant";
import "../common.css";

@inject("navbar")
@observer
class SyncScroll extends Component {
  handleClick = () => {
    const {isContainImgName} = this.props.navbar;
    this.props.navbar.setContainImgName(!isContainImgName);
  };

  render() {
    return (
      <div id="lite-menu-contain-img-name" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag">{this.props.navbar.isContainImgName && <span>{RIGHT_SYMBOL}</span>}</span>
          <span className="lite-menu-name">上传图片时包含名称</span>
        </span>
      </div>
    );
  }
}

export default SyncScroll;
