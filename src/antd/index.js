import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  LocaleProvider,
  DatePicker,
  message,
  version,
  Button,
  PageHeader
} from "antd";

import LocaleProviderDemo from "./LocaleProvider";
import PageHeaderDemo from "./PageHeaderDemo";
import StepsDemo from "./StepsDemo";
import "antd/dist/antd.css";
import moment from "moment";

moment.locale("zh-cn");

class App extends Component {
  state = {
    date: null
  };
  handleChange = date => {};
  render() {
    const { date } = this.state;
    const routes = [
      {
        path: "index",
        breadcrumbName: "First-level Menu"
      },
      {
        path: "first",
        breadcrumbName: "Second-level Menu"
      },
      {
        path: "second",
        breadcrumbName: "Third-level Menu"
      }
    ];
    return (
      <div class="main">
        <Button type="primary">Example Button</Button>
        <div class="example">
          <StepsDemo />
        </div>
        <div class="example">
          <div>LocaleProviderDemo</div>
          {/*<LocaleProviderDemo />*/}
        </div>
        <div class="example">
          <div>PageHeaderDemo</div>
          <PageHeader title="Title" breadcrumb={{ routes }} />
          <PageHeaderDemo />
        </div>
      </div>
    );
  }
}

export default App;
