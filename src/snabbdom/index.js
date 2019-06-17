import React from "react";
import snabbdom from "snabbdom";
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    //var snabbdom = require("snabbdom");
    var snabbdom = require("snabbdom");
    this.patch = snabbdom.init([
      // Init patch function with chosen modules
      require("snabbdom/modules/class").default, // makes it easy to toggle classes
      require("snabbdom/modules/props").default, // for setting properties on DOM elements
      require("snabbdom/modules/style").default, // handles styling on elements with support for animations
      require("snabbdom/modules/eventlisteners").default // attaches event listeners
    ]);
    this.h = require("snabbdom/h").default;
  }
  componentDidMount() {
    var container = document.getElementById("container");

    var vnode = this.h(
      "div#container.two.classes",
      { on: { click: () => {} } },
      [
        this.h("span", { style: { fontWeight: "bold" } }, "This is bold"),
        " and this is just normal text",
        this.h("a", { props: { href: "/foo" } }, "I'll take you places!")
      ]
    );
    console.log(vnode, container);
    this.patch(container, vnode);

    var newVnode = this.h(
      "div#container.two.classes",
      { on: { click: () => {} } },
      [
        this.h(
          "span",
          { style: { fontWeight: "normal", fontStyle: "italic" } },
          "This is now italic type"
        ),
        " and this is still just normal text",
        this.h("a", { props: { href: "/bar" } }, "I'll take you places!")
      ]
    );
    this.patch(vnode, newVnode);
  }

  /*
    var newVnode = h("div#container.two.classes", { on: { click: () => {} } }, [
      h(
        "span",
        { style: { fontWeight: "normal", fontStyle: "italic" } },
        "This is now italic type"
      ),
      " and this is still just normal text",
      h("a", { props: { href: "/bar" } }, "I'll take you places!")
    ]);
    // Second `patch` invocation
    patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
    */

  render() {
    return <div id="container">1</div>;
  }
}
