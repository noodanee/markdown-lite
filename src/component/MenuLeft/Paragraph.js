import React, {Component} from "react";
import {Menu, Dropdown} from "antd";

import "./common.css";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        导出
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        导入
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        打印
      </a>
    </Menu.Item>
  </Menu>
);

class Paragraph extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]} overlayClassName="lite-overlay">
        <a className="lite-menu-link" href="#">
          段落
        </a>
      </Dropdown>
    );
  }
}

export default Paragraph;
