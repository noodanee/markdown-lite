import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("dialog")
@observer
class Search extends Component {
  handleClick = () => {
    this.props.dialog.setSearchOpen(!this.props.dialog.isSearchOpen);
  };

  render() {
    return (
      <div id="lite-menu-search" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">查找</span>
        </span>
        <span className="lite-menu-shortcut">{hotKeys.search}</span>
      </div>
    );
  }
}

export default Search;
