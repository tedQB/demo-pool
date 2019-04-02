import React from "react";
import Immutable from "immutable";

function FromJsDemo() {
  const t1 = Immutable.fromJS({
    a: {
      b: [10, 20, 30]
    },
    c: 40
  });
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

  return <p>fromJsDemo</p>;
}
export default FromJsDemo;
