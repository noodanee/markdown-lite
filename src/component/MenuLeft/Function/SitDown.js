import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import "../common.css";

@inject("dialog")
@observer
class SitDownFunction extends Component {
  handleClick = () => {
    this.props.dialog.setSitDownOpen(true);
  };

  render() {
    return (
      <div id="lite-menu-sitdown" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">SitDown</span>
        </span>
      </div>
    );
  }
}

export default SitDownFunction;
