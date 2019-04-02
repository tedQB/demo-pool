immutable.js

# 为什么要在 React.js 中使用 Immutable

- 它是一个完全独立的库，无论基于什么框架都可以用它。意义在于它弥补了 Javascript 没有不可变数据结构的问题
- 由于是不可变的，可以放心的对对象进行任意操作。在 React 开发中，频繁操作 state 对象或是 store ，配合 immutableJS 快、安全、方便
- 熟悉 React.js 的都应该知道， React.js 是一个 UI = f(states) 的框架，为了解决更新的问题， React.js 使用了 virtual dom ， virtual dom 通过 diff 修改 dom ，来实现高效的 dom 更新。
- 但是有一个问题。当 state 更新时，如果数据没变，你也会去做 virtual dom 的 diff ，这就产生了浪费。这种情况其实很常见
- 当然你可能会说，你可以使用 PureRenderMixin 来解决呀， PureRenderMixin 是个好东西，我们可以用它来解决一部分的上述问题
- 但 PureRenderMixin 只是简单的浅比较，不使用于多层比较。那怎么办？自己去做复杂比较的话，性能又会非常差
- 方案就是使用 immutable.js 可以解决这个问题。因为每一次 state 更新只要有数据改变，那么 PureRenderMixin 可以立刻判断出数据改变，可以大大提升性能

# Immutable 优缺点

## Immutable 优点

- Immutable 降低了 Mutable 带来的复杂度

可变（ Mutable ）数据耦合了 Time 和 Value 的概念，造成了数据很难被回溯

- 节省内存

Immutable.js 使用了 Structure Sharing 会尽量复用内存，甚至以前使用的对象也可以再次被复用。没有被引用的对象会被垃圾回收

```js
import { Map } from "immutable";
let a = Map({
  select: "users",
  filter: Map({ name: "Cam" })
});
let b = a.set("select", "people");

a === b; // false
a.get("filter") === b.get("filter"); // true
```

Undo/Redo，Copy/Paste，甚至时间旅行这些功能做起来小菜一碟

因为每次数据都是不一样的，只要把这些数据放到一个数组里储存起来，想回退到哪里就拿出对应数据即可，很容易开发出撤销重做这种功能。

- 并发安全

传统的并发非常难做，因为要处理各种数据不一致问题，因此『聪明人』发明了各种锁来解决。但使用了 Immutable 之后，数据天生是不可变的，并发锁就不需要了。

- 拥抱函数式编程

Immutable 本身就是函数式编程中的概念，纯函数式编程比面向对象更适用于前端开发。因为只要输入一致，输出必然一致，这样开发的组件更易于调试和组装。

## Immutable 缺点

- 需要学习新的 API
- 增加了资源文件大小
- 容易与原生对象混淆

# Immutable 的几种数据类型

- List : 有序索引集，类似 JavaScript 中的 Array 。
- Map : 无序索引集，类似 JavaScript 中的 Object 。
- OrderedMap : 有序的 Map ，根据数据的 set() 进行排序。
- Set : 没有重复值的集合。
- OrderedSet : 有序的 Set ，根据数据的 add 进行排序。
- Stack : 有序集合，支持使用 unshift（） 和 shift（） 添加和删除。
- Range() : 返回一个 Seq.Indexed 类型的集合，这个方法有三个参数， start 表示开始值，默认值为 0 ， end 表示结束值，默认为无穷大， step 代表每次增大的数值，默认为 1 .如果 start = end ,则返回空集合。
- Repeat() : 返回一个 vSeq.Indexe 类型的集合，这个方法有两个参数， value 代表需要重复的值， times 代表要重复的次数，默认为无穷大。
- Record : 一个用于生成 Record 实例的类。类似于 JavaScript 的 Object ，但是只接收特定字符串为 key ，具有默认值。
- Seq : 序列，但是可能不能由具体的数据结构支持。
- Collection : 是构建所有数据结构的基类，不可以直接构建
- 上面那么多常用的也就是 List 和 Map

# 几个重要的 API

1. fromJS

- fromJS() 是最最最常用的将原生 JS 数据转换为 ImmutableJS 数据的转换方法。使用方式类似于 JSON.parse() ，接收两个参数： json 数据和 reviver 函数

- 在不传递 reviver 函数的情况下，默认将原生 JS 的 Array 转为 List ， Object 转为 Map
  fromJS

更多：
[link]<https://www.cnblogs.com/chris-oil/p/8494337.html>
