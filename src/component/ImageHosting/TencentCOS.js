import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Input, Select, Form} from "antd";
import {TENGCENTCOS_IMAGE_HOSTING} from "../../utils/constant";

const {Option} = Select;
const formItemLayout = {
  labelCol: {
    xs: {span: 6},
  },
  wrapperCol: {
    xs: {span: 16},
  },
};

@inject("imageHosting")
@observer
class TencentCOS extends Component {
  constructor(props) {
    super(props);
    // 从localstorage里面读取
    const imageHosting = JSON.parse(localStorage.getItem(TENGCENTCOS_IMAGE_HOSTING));
    this.state = {
      imageHosting
    };
  }

  regionChange = (e) => {
    const {imageHosting} = this.state;
    imageHosting.region = e.target.value;
    this.setState({imageHosting});
    localStorage.setItem(TENGCENTCOS_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  secretIdChange = (e) => {
    const {imageHosting} = this.state;
    imageHosting.secretId = e.target.value;
    this.setState({imageHosting});
    localStorage.setItem(TENGCENTCOS_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  secretKeyChange = (e) => {
    const {imageHosting} = this.state;
    imageHosting.secretKey = e.target.value;
    this.setState({imageHosting});
    localStorage.setItem(TENGCENTCOS_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  bucketChange = (e) => {
    const {imageHosting} = this.state;
    imageHosting.bucket = e.target.value;
    this.setState({imageHosting});
    localStorage.setItem(TENGCENTCOS_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  domainChange = (e) => {
    const {imageHosting} = this.state;
    imageHosting.domain = e.target.value;
    this.setState({imageHosting});
    localStorage.setItem(TENGCENTCOS_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  namespaceChange = ({target: {value}}) => {
    const {imageHosting} = this.state;
    imageHosting.namespace = value;
    this.setState({imageHosting});
    localStorage.setItem(TENGCENTCOS_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  render() {
    const {region, secretId, secretKey, bucket, domain, namespace} = this.state.imageHosting;
    return (
      <Form {...formItemLayout}>
        <Form.Item label="Bucket" style={style.formItem}>
          <Input value={bucket} onChange={this.bucketChange} placeholder="Bucket" />
        </Form.Item>
        <Form.Item label="Region" style={style.formItem}>
          <Input value={region} onChange={this.regionChange} placeholder="Region" />
        </Form.Item>
        <Form.Item label="SecretId" style={style.formItem}>
          <Input value={secretId} onChange={this.secretIdChange} placeholder="SecretId" />
        </Form.Item>
        <Form.Item label="SecretKey" style={style.formItem}>
          <Input value={secretKey} onChange={this.secretKeyChange} placeholder="SecretKey" />
        </Form.Item>
        <Form.Item label="CDN Domain" style={style.formItem}>
          <Input value={domain} onChange={this.domainChange} placeholder="CDN Domain" />
        </Form.Item>
        <Form.Item label="namespace" style={style.formItem}>
          <Input value={namespace} onChange={this.namespaceChange} placeholder="namespace" />
        </Form.Item>
        <Form.Item label="提示" style={style.formItem}>
          <span>配置后请在右上角进行切换，</span>
        </Form.Item>
      </Form>
    );
  }
}

const style = {
  formItem: {
    marginBottom: "10px",
  },
};

export default TencentCOS;
