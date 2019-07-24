import React from 'react'
import { Tabs, DatePicker } from 'antd';
import { getRangeDate } from '../../../../utils/utils'
import SaleList from './Sale'
import VisiteList from './Visite'
import './index.less'

const { TabPane } = Tabs;
const { RangePicker } = DatePicker
const dateData = [
  { key: '1', name: '今日', type: 'day' },
  { key: '2', name: '本周', type: 'week' },
  { key: '3', name: '本月', type: 'month' },
  { key: '4', name: '全年', type: 'year' }]


class MainCharts extends React.Component {

  state = {
    type: "1",
    dateType: '4',
    dateText: getRangeDate('year')
  }

  changeTab = (key) => {
    this.setState({
      type: key
    })
  }

  operations() {
    const { dateType, dateText } = this.state
    const data = dateData.map((item, idx) => {
      return <span key={item.key} className={dateType === item.key ? 'active' : ''}
        onClick={() => {
          this.setState({
            dateType: item.key,
            dateText: getRangeDate(item.type)
          })
        }}>{item.name}</span>
    })
    return <div className="qf-datePicker">
      <div className="qf-datePicker-text">{data}</div>
      <RangePicker style={{ width: '256px' }} value={dateText} />
    </div>
  }

  render() {

    return (
      <div className='qf-main-charts'>
        <Tabs defaultActiveKey="1" onChange={this.changeTab} size='large' tabBarExtraContent={this.operations()}>
          <TabPane tab="销售额" key="1">
            <SaleList />
          </TabPane>
          <TabPane tab="访问量" key="2">
            <VisiteList/>
          </TabPane>
        </Tabs>,
      </div>
    )
  }
}




export default MainCharts
