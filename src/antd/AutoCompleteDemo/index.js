import React, { Component } from "react";
import { Icon, Button, Input, AutoComplete } from "antd";
const { Option } = AutoComplete;
function onSelect(value) {
  console.log("onSelect", value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100)
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

export default class AutoCompleteDemo extends Component {
  state = {
    dataSource: []
  };
  handleSearch = value => {
    this.setState({
      dataSource: value ? this.searchResult1(value) : []
    });
  };

  searchResult1 = query => {
    console.log(
      Array(getRandomInt(5))
        .join(",")
        .split(",")
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: getRandomInt(200, 100)
        }))
    );
    return new Array(getRandomInt(5))
      .join(".")
      .split(".")
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: getRandomInt(200, 100)
      }));
  };

  render() {
    const { dataSource } = this.state;

    return (
      <div className="global-search-wrapper" style={{ width: 200 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: "100%" }}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          dataSource={dataSource.map(renderOption)}
          placeholder="input here"
          optionLabelProp="text"
          // dataSource={dataSource.map(renderOption)}
        >
          <Input
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>
    );
  }
}
