import React,{ Component }from 'react'
import ReactDOM from 'react-dom'
import {
  LocaleProvider,
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Button,
  Select,
  Transfer,
  Radio,
} from 'antd';
import "antd/dist/antd.css"
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment';
import 'moment/locale/zh-cn'

class LocaleProviderDemo extends Component {
  state = {
    date:null
  };


const { Option } = Select;
const { RangePicker } = DatePicker;



  render(){

    const {date} = this.state;   
    return(
      <LocaleProvider locale={zhCN}>
        <div>
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>

      </LocaleProvider>
    )
  }
}

export default LocaleProviderDemo;