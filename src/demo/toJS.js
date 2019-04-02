import React from "react";
import Immutable from "immutable";

function ToJsDemo() {
  const map1 = Immutable.Map({ a: 1, b: 1, c: 1 });
  const map2 = Immutable.Map({ a: 1, b: 1, c: 1 });

  //两个不同的对象
  console.log(map1 === map2); //false
  //进行值比较
  console.log(Immutable.is(map1, map2)); //true
  //不仅仅只能比较ImmutableJS类型的数据
  console.log(Immutable.is(undefined, undefined)); //true
  console.log(Immutable.is(null, undefined)); //false
  console.log(Immutable.is(null, null)); //true
  console.log(Immutable.is(NaN, NaN)); //true

  // 区别于 Object.is
  console.log(Object.is(0, -0), Immutable.is(-0, 0)); // false , true

  return <p>ToJsDemo</p>;
}
export default ToJsDemo;
