import React,{ Component }from 'react'
import ReactDOM from 'react-dom'
import {version, Button } from "antd"
import "antd/dist/antd.css"


class App extends Component {
  state = {
    date:null
  };
  handleChange = date =>{

  };
  render(){
    return(
      
      <div>
        <Button type="primary">Example Button</Button>
      </div>
    )
  }
}

export default App;