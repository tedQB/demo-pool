import React from "react";
import { Immutable, Map, List, toJS, fromJS } from "immutable";

function APIDemo() {
  console.log("==Map==");
  console.log(Map());
  console.log(Map().toJS()); //{ }
  console.log(Map({ key: "value" }).toJS());
  console.log(
    Map([["key", "value"], ["key", "value2"], ["key1", "value1"]]).toJS()
  );
  console.log(
    Map.of("key1", "value1", "key2", "value2", "key3", "value3").toJS()
  ); // {key1: "value1", key2: "value2", key3: "value3"}
  console.log(Map.isMap({})); // false
  console.log(Map.isMap(Map({}))); // true

  console.log("==List==");
  console.log(List().toJS()); //[]
  console.log(List([1, 2, 3, 4, { a: 123 }]).toJS());
  console.log(List.of(1, 2, 3, 4, { a: 123 }).toJS());
  console.log(List.isList([])); // false
  console.log(List.isList(List([]))); // true

  return <p>APIDemo</p>;
}
export default APIDemo;
