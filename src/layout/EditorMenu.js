import React, {Component} from "react";
import {Menu} from "antd";

import LinkToFoot from "../component/MenuLeft/Pattern/LinkToFoot";
import Format from "../component/MenuLeft/Pattern/Format";
import Image from "../component/MenuLeft/Pattern/Image";
import "./EditorMenu.css";

class EditorMenu extends Component {
  render() {
    return (
      <Menu id="lite-editor-menu" className="lite-editor-menu">
        <Menu.Item className="ant-dropdown-menu-item">
          <LinkToFoot />
        </Menu.Item>
        <Menu.Item className="ant-dropdown-menu-item">
          <Format />
        </Menu.Item>
        <Menu.Item className="ant-dropdown-menu-item">
          <Image />
        </Menu.Item>
      </Menu>
    );
  }
}

export default EditorMenu;
