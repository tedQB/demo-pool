import React from "react";
import ReactDOM from "react-dom";

import { createStore, bindActionCreators } from "redux";

import { Provider, connect } from "react-redux";

const initalState = {
  text: "hello world"
};

//action
function changeText(text) {
  return {
    type: "CHANGE_TEXT",
    text
  };
}

function myApp(state = initalState, action) {
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        text: (state.text = action.text)
        // 问题就是在这里如何取到e.target.value!!!
      };
    default:
      return {
        text: "hello world"
      };
  }
}
//store
let store = createStore(myApp);

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.actions.changeText(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.text}
          onChange={this.handleChange}
        />
        <p>{this.props.text}</p>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { actions, text } = this.props;
    return (
      <div>
        <Input actions={actions} text={text} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        changeText: changeText
      },
      dispatch
    )
  };
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
