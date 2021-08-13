import React from "react";
import {Menu, Dropdown} from "antd";
import {observer, inject} from "mobx-react";

import {CODE_OPTIONS, RIGHT_SYMBOL, IS_MAC_CODE} from "../../utils/constant";
import "./CodeTheme.css";

@inject("navbar")
@observer
class CodeTheme extends React.Component {
  changeCodeTheme = (item) => {
    // 是否为 Mac 风格代码
    if (item.key === IS_MAC_CODE) {
      const {isMacCode, codeNum} = this.props.navbar;
      if (isMacCode) {
        this.props.navbar.setMacCode(false);
        this.props.navbar.setCodeNum(codeNum, false);
      } else {
        this.props.navbar.setMacCode(true);
        this.props.navbar.setCodeNum(codeNum, true);
      }
    } else {
      const {isMacCode} = this.props.navbar;
      const codeNum = parseInt(item.key, 10);
      this.props.navbar.setCodeNum(codeNum, isMacCode);
    }
  };

  render() {
    const {codeNum, isMacCode} = this.props.navbar;

    const codeMenu = (
      <Menu onClick={this.changeCodeTheme}>
        {CODE_OPTIONS.map((option, index) => (
          <Menu.Item key={index}>
            <div id={`lite-menu-codetheme-${option.id}`} className="lite-codetheme-item">
              <span>
                <span className="lite-codetheme-item-flag">{codeNum === index && <span>{RIGHT_SYMBOL}</span>}</span>
                <span className="lite-codetheme-item-name">{option.name}</span>
              </span>
            </div>
          </Menu.Item>
        ))}
        <Menu.Divider />
        <Menu.Item key={IS_MAC_CODE}>
          <div id="lite-menu-codetheme-apple" className="lite-codetheme-item">
            <span>
              <span className="lite-codetheme-item-flag">{isMacCode && <span>{RIGHT_SYMBOL}</span>}</span>
              <span className="lite-codetheme-item-name">Mac 风格</span>
            </span>
          </div>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={codeMenu} trigger={["click"]} overlayClassName="lite-overlay">
        <a id="lite-menu-codetheme" className="lite-menu-link" href="#">
          代码主题
        </a>
      </Dropdown>
    );
  }
}

export default CodeTheme;
