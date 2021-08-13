import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL} from "../../../utils/constant";
import "../common.css";

@inject("navbar")
@observer
class SyncScroll extends Component {
  handleClick = () => {
    const {isSyncScroll} = this.props.navbar;
    this.props.navbar.setSyncScroll(!isSyncScroll);
  };

  render() {
    return (
      <div id="lite-menu-sync-scroll" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag">{this.props.navbar.isSyncScroll && <span>{RIGHT_SYMBOL}</span>}</span>
          <span className="lite-menu-name">同步滚动</span>
        </span>
      </div>
    );
  }
}

export default SyncScroll;
