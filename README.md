immutable.js

# 为什么要在 React.js 中使用 Immutable

- 它是一个完全独立的库，无论基于什么框架都可以用它。意义在于它弥补了 Javascript 没有不可变数据结构的问题
- 由于是不可变的，可以放心的对对象进行任意操作。在 React 开发中，频繁操作 state 对象或是 store ，配合 immutableJS 快、安全、方便
- 熟悉 React.js 的都应该知道， React.js 是一个 UI = f(states) 的框架，为了解决更新的问题， React.js 使用了 virtual dom ， virtual dom 通过 diff 修改 dom ，来实现高效的 dom 更新。
- 但是有一个问题。当 state 更新时，如果数据没变，你也会去做 virtual dom 的 diff ，这就产生了浪费。这种情况其实很常见
- 当然你可能会说，你可以使用 PureRenderMixin 来解决呀， PureRenderMixin 是个好东西，我们可以用它来解决一部分的上述问题
- 但 PureRenderMixin 只是简单的浅比较，不使用于多层比较。那怎么办？自己去做复杂比较的话，性能又会非常差
- 方案就是使用 immutable.js 可以解决这个问题。因为每一次 state 更新只要有数据改变，那么 PureRenderMixin 可以立刻判断出数据改变，可以大大提升性能
