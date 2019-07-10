import React,{ Component }from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider,DatePicker, message, version, Button } from "antd"
import LocaleProviderDemo from './LocaleProvider'
import "antd/dist/antd.css"
import moment from 'moment'

moment.locale('zh-cn')

class App extends Component {
  state = {
    date:null
  };
  handleChange = date =>{

  };
  render(){

    const {date} = this.state;   
    return(
      
      <div class="main">
        <Button type="primary">Example Button</Button>
        <div>
          <b>LocaleProviderDemo</b>
          <LocaleProviderDemo />
        </div>      
      </div>

    )
  }
}

export default App;