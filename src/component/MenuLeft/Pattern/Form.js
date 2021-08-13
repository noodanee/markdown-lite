import React, {Component} from "react";
import {inject, observer} from "mobx-react";

import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("dialog")
@observer
class Form extends Component {
  showModal = () => {
    this.props.dialog.setFormOpen(true);
  };

  render() {
    return (
      <div id="lite-menu-form" className="lite-menu-item" onClick={this.showModal}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">表格</span>
        </span>
        <span className="lite-menu-shortcut">{hotKeys.form}</span>
      </div>
    );
  }
}

export default Form;
