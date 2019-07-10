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

const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title:'Name',
    dataIndex:'name',
    filters:[
      {
        text:'filter1',
        value:'filter1'
      }
    ]
  },
  {
    title:'Age',
    dataIndex:'age'
  }
]


class Page extends Component {
  state = {
    visible:false
  };
  showModal=()=>{
    this.setState({visible:true})
  };
  hideModal=()=>{
    this.setState({visible:false})
  }

  render(){
    const info = ()=>{
      Modal.info({
        title:'some info title',
        content:'some info content',
      })
    };
    const confirm = ()=>{
      Modal.confirm({
        title:'some info title',
        content:'some info content'
      })
    };

    return(

      <div className="local-components">
        <div className="example">
          <Pagination defaultCurrent={10} total={100} showSizeChanger />
        </div>
        <div className="example">
          <Select style={{width:200}} showSearch>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style={{width:200}}/>
        </div>         
        <div className="example">
          <Button type="primary" onClick={this.showModal}>
            Show Modal
          </Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href='#'>Click to confirm</a>
          </Popconfirm>
        </div>          
        <div className="example">
          <Transfer dataSource={[]} showSearch targetKeys={[]} render={item=>item.title}/>
        </div>
        <div style={{width:400, border:'1px solid #d9d9d9', borderRadius:4}}>
          <Calendar fullscreen={false} value={moment()} />
        </div>
        <div className="example">
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
        </Modal>
      </div>

    )
  }
}

class App extends Component{ 
  constructor(){
    super();
    this.state={
      Locale:null,
    }
  }
  changeLocale = e => {
    const localValue = e.target.value;
    this.setState({locale:localValue})
    if(!localValue){
      moment.locale('en')
    }else{ 
      moment.locale('zh-cn')
    }
  };
  render(){ 
    const {locale}=this.state;
    return ( 
      <div>
        <div className="change-locale">
          <span>Change locale of components:</span>
          <Radio.Group defaultValue={undefined} onChange={this.changeLocale}>
            <Radio.Button key="en" value={undefined}>
              Englisth
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>            
          </Radio.Group>
        </div>
        <LocaleProvider locale={locale}>
          <Page 
            key={locale? locale.local:'en'}
          />
        </LocaleProvider>
      </div>
    )
  }
}
export default App;