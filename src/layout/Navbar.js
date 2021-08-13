import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import classnames from "classnames";

import File from "../component/MenuLeft/File";
import About from "../component/MenuLeft/About";
import Pattern from "../component/MenuLeft/Pattern";
import Function from "../component/MenuLeft/Function";
import Theme from "../component/MenuLeft/Theme";
import CodeTheme from "../component/MenuLeft/CodeTheme";
import Setting from "../component/MenuLeft/Setting";
import View from "../component/MenuLeft/View";

import "./Navbar.css";

@inject("view")
@observer
class Navbar extends Component {
  render() {
    const {title, token} = this.props;
    const {isImmersiveEditing} = this.props.view;
    const liteNavbarClass = classnames({
      "lite-navbar": true,
      "lite-navbar-hide": isImmersiveEditing,
    });
    return (
      <div className={liteNavbarClass}>
        <div className="lite-left-nav">
          {title === "" ? null : (
            <section id="lite-title" className="lite-title">
              {title}
            </section>
          )}
          <File />
          <Pattern />
          <Function />
          <View />
          <Theme token={token} />
          <CodeTheme />
          <Setting />
          <About />
        </div>
        <div className="lite-right-nav" />
      </div>
    );
  }
}

export default Navbar;
