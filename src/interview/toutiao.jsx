import React, { Component } from "react";
import "./toutiao.css";

export default class PublicHeader extends Component {
  render() {
    return (
      <div class="container">
        1.实现一个三角形
        <div class="arrow" />
        <br />
        2.两种方式实现自适应搜索框,按钮大小不变
        <div class="wrap">
          <input type="text" class="input" />
          <button type="button" class="button">
            搜索
          </button>
        </div>
      </div>
    );
  }
}
