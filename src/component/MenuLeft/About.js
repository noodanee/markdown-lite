import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import "./common.css";

@inject("dialog")
@observer
class About extends Component {
  handleClick = () => {
    this.props.dialog.setAboutOpen(true);
  };

  render() {
    return (
      <a id="lite-menu-setting" className="lite-menu-link" onClick={this.handleClick}>
        关于
      </a>
    );
  }
}

export default About;
