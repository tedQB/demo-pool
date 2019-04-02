import React from "react";
import { Immutable, Map, List } from "immutable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  let a2 = Immutable.fromJS({
    b: 1,
    c: {
      c1: 123
    }
  });
  let b2 = a2.set("b", 2);
  console.log(a2 === b2);
  console.log(a2.b === b2.b);
  console.log(a2.get("c") === b2.get("c"));
  console.log("==========");
  let a1 = {
    b: 1,
    c: {
      c1: 123
    }
  };
  let b1 = a1;
  b1.b = 2;
  console.log(a1 === b1);
  console.log(a1.b === b1.b);
  console.log(a1.c === b1.c);

  return <p>1</p>;
}

function fromJS() {
  const t1 = Immutable.fromJS({ a: { b: [10, 20, 30] }, c: 40 });
  console.log(t1);

  // 不常用
  const t2 = Immutable.fromJS({ a: { b: [10, 20, 30] }, c: 40 }, function(
    key,
    value
  ) {
    // 定制转换方式，下这种就是将Array转换为List，Object转换为Map
    const isIndexed = Immutable.Iterable.isIndexed(value);
    return isIndexed ? value.toList() : value.toOrderedMap();
    // true, "b", {b: [10, 20, 30]}
    // false, "a", {a: {b: [10, 20, 30]}, c: 40}
    // false, "", {"": {a: {b: [10, 20, 30]}, c: 40}}
  });
  console.log(t2);
}

function toJS() {
  const map1 = Immutable.Map({ a: 1, b: 1, c: 1 });
  const map2 = Immutable.Map({ a: 1, b: 1, c: 1 });

  // 两个不同的对象
  console.log(map1 === map2); // false
  // 进行值比较
  console.log(Immutable.is(map1, map2)); // true

  // 不仅仅只能比较ImmutableJS的类型的数据
  console.log(Immutable.is(undefined, undefined)); // true
  console.log(Immutable.is(null, undefined)); // false
  console.log(Immutable.is(null, null)); // true
  console.log(Immutable.is(NaN, NaN)); // true

  // 区别于 Object.is
  console.log(Object.is(0, -0), Immutable.is(-0, 0)); // false , true
}

function MapDemo() {
  console.log(
    Map()
      .set(List.of(1), "list-of-one")
      .get(List.of(1))
  );
  console.log(
    Map()
      .set(NaN, "NaN")
      .get(NaN)
  );
  console.log(
    Map()
      .set(undefined, "undefined")
      .get(undefined)
  );
  console.log(
    Map()
      .set(null, "null")
      .get(null)
  );
}

export default BasicExample;
