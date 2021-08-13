import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {message} from "antd";

import {download, dateFormat} from "../../../utils/helper";
import {EXPORT_FILENAME_SUFFIX} from "../../../utils/constant";
import "../common.css";

@inject("content")
@observer
class ExportMarkdown extends Component {
  handleClick = () => {
    const {markdownEditor} = this.props.content;
    const content = markdownEditor.getValue();
    if ("download" in document.createElement("a")) {
      download(content, dateFormat(new Date(), "yyyy-MM-dd") + EXPORT_FILENAME_SUFFIX);
    } else {
      message.warn("浏览器不支持");
    }
  };

  render() {
    return (
      <div id="lite-menu-export-markdown" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">导出 Markdown</span>
        </span>
      </div>
    );
  }
}

export default ExportMarkdown;
