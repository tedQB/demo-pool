/**
  This CodeSandbox has been automatically generated using
  `codesandboxer`. If you're curious how that happened, you can
  check out our docs here: https://github.com/noviny/codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from "react";
import ReactDOM from "react-dom";
//import App from './demo/fromjs.js';
//import App from './demo/toJS';
//import App from "./demo/mapList.js";
//import App from "./demo/API.js";
//import App from "./demo/Hook";
//import App from "./contextdemo2/App"; //ceshi
//import App from "./snabbdom/index";
//import App from "./interview/toutiao";
//import App from "./antd/index";
//import App from "./reduxform/index"




//ReactDOM.render(<App />, document.getElementById("root"));


import {
  createStore,
  bindActionCreators
} from 'redux';

import {
  Provider,
  connect
} from 'react-redux';

const initalState = {
  text: 'hello world'
}

//action
function changeText1(text) {
  return {
      type: "CHANGE_TEXT",
      text
  }
}
function changeText2(text) {
  return {
      type: "CHANGE_TEXT",
      text
  }
}
//reducer
function myApp(state = initalState, action) {
  switch (action.type) {
      case 'CHANGE_TEXT':
          return {
              text: state.text = action.text
              // 问题就是在这里如何取到e.target.value!!!
          }
      default:
          return {
              text: 'hello world'
          }
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
      this.props.actions.changeText1(e.target.value);
      this.props.actions.changeText2(e.target.value);
  }
  render() {
      return (
          <div>
                <input type="text"  value={this.props.text} onChange={this.handleChange}/>
                <p>{this.props.text}</p>
                <input type="text"  value={this.props.text} onChange={this.handleChange}/>
                <p>{this.props.text}</p>
            </div>
      )
  }
}
class App extends React.Component{ 
  constructor(props) {
    super(props);
  }
  render() {
    const {actions, text} = this.props;
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
  }
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({
          changeText1: changeText1,
          changeText2: changeText2
      }, dispatch)
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)

