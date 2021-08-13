import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import "../common.css";
import {message} from "antd";

@inject("content")
@observer
class ImportFile extends Component {
  handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      this.props.content.setContent(event.target.result);
      message.success("导入文件成功！");
    };
    reader.readAsText(file);
  };

  render() {
    return (
      <label id="lite-menu-import-file" className="lite-menu-item" htmlFor="importFile">
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">导入</span>
          <input
            style={{display: "none"}}
            type="file"
            id="importFile"
            accept=".txt,.md"
            hidden=""
            onChange={this.handleChange}
          />
        </span>
      </label>
    );
  }
}

export default ImportFile;
