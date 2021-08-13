import React, {Component} from "react";

import "../common.css";

class ExportPdf extends Component {
  handleClick = () => {
    setTimeout(() => {
      window.print();
    }, 500);
  };

  render() {
    return (
      <div id="lite-menu-export-pdf" className="lite-menu-item" onClick={this.handleClick}>
        <span>
          <span className="lite-menu-flag" />
          <span className="lite-menu-name">导出 PDF</span>
        </span>
      </div>
    );
  }
}

export default ExportPdf;
