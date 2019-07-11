import React,{ Component }from 'react'
import {
  PageHeader,
  Tag,
  Tabs,
  Button,
  Statistic,
  Row,
  Col,
  Icon
} from 'antd'

const { TabPane } = Tabs;

const Desciption = ({term, children, span=12})=>( 
  <Col span={span}>
    <div className="description">
      <div className="term">{term}</div>
      <div className="detail">{children}</div>
    </div>
  </Col>
)

const content = ( 
  <Row>
    <Desciption term="Created">Desciption</Desciption>
    <Desciption term="Association">
      <a>421421</a>
    </Desciption>
    <Desciption term="Creation Time">2017-01-10</Desciption>
    <Desciption term="Effective Time">2017-10-10</Desciption>
    <Desciption term="Remarks" span={24}>
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Desciption>
  </Row>
)

const extraContent = ( 
  <Row>
    <Col span={12}>
      <Statistic title="Status" value="Pending"/>
    </Col>
     <Col span={12}>
      <Statistic title="Price" prefix="$" value={568.08} />
     </Col>
  </Row>
)

const arrowLeft = ( 
  <Icon type="arrow-left">

  </Icon>
)

export default class PageHeaderDemo extends Component{ 

  render(){
    return (
    <PageHeader
      onBack={()=>window.history.back()}
      title="Title"
      subTitle = "This is a subtitle"
      backIcon = {<Icon type="arrow-right" />}
      tags={<Tag color="red">Warning</Tag>}
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>
      ]}
      footer={ 
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1"/>
          <TabPane tab="Rule" key="2"/>
        </Tabs>
      }
    > 
      <div className="wrap">
        <div className="content padding">
          {content}
        </div>
        <div className="extraContent">
          {extraContent}
        </div>
      </div>
    </PageHeader>
    )
  }
}