/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-20 16:39:51
 */
import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { Icon } from 'antd'
import moment from 'moment'
import Line from './component/Line'
import Card from './component/Card'
import Pie from './component/Pie'
import './index.less'

const icon = [{ type: 'file-search', name: '营业分析', detail: { total: '销售总额', price: '￥10009.00' } },
{ type: 'team', name: '趋势分析', detail: { total: '消费总额', price: '￥10932.00' } }, { type: 'file-text', name: '促销分析', detail: { total: '促销总额', price: '￥90009.00' } },
{ type: 'setting', name: '设置', detail: { total: '促销总额', price: '￥90009.00' } }]
const dateArr = ['今日', '昨日', '近7天', '近30天', '自定义']

class App extends Component {

  state = {
    type: 'file-search',
    name: '营业分析',
    dataType: '今日',
    detail: { total: '销售总额', price: '￥10009.00' }
  }

  render() {
    const { type, name, dataType, detail } = this.state
    const footer = icon.map(item => {
      return (<div className={item.type === type ? "qf-footer-btn qf-active" : "qf-footer-btn"}
        key={item.type}
        onClick={() => {
          this.setState({
            type: item.type,
            name: item.name,
            detail: item.detail
          })
        }}>
        <Icon type={item.type} style={{ fontSize: '0.16rem' }} />
        <span>{item.name}</span>
      </div>)
    })
    const date = dateArr.map(item => {
      return <span key={item} onClick={() => { this.setState({ dataType: item }) }}
        className={item === dataType ? "qf-active" : ""}
      >{item}</span>
    })
    return (
      <div className="qf-chart-two">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.replace("navPage") }}
        >{name}</NavBar>
        <div className="qf-chart-main">
          <div className="qf-chart-consumption">
            <p>{detail.total}</p>
            <p>{detail.price}</p>
            <p>数据统计截止到：{moment().format("YYYY-MM-DD HH:mm")}</p>
          </div>
          <div className="qf-chart-date">
            {date}
          </div>
          <div className="qf-chart-center">
            {type === 'file-search' ? <Line /> : type === 'team' ? <Card /> : <Pie />}
          </div>
        </div>
        <div className="qf-chart-footer">
          {footer}
        </div>
      </div>
    );
  }
}
export default App
