/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-23 16:34:27
 */
import React, { Component } from 'react'
import { NavBar, Icon as Iconm } from 'antd-mobile';
import { Icon } from 'antd'
import Sale from './component/Sale'
import SaleDetail from './component/SaleDetail'
import GetTarget from './component/GetTarget'
import './index.less'


const data = [{ name: '每日销售', icon: 'shopping', key: '1' }, { name: '销售明细', icon: 'bars', key: '2' },
{ name: '目标达成', icon: 'euro', key: '3' }]
class App extends Component {
  state = {
    itemData: { name: '每日销售', icon: 'shopping' }
  }


  render() {
    const { itemData } = this.state
    const footerIcon = data.map(item => {
      return <div className={item.name === itemData.name ? "qf-footer-item qf-footer-active" : 'qf-footer-item'}
        key={item.key}
        onClick={() => {
          this.setState({
            itemData: item
          })
        }}
      >
        <Icon type={item.icon} />
        <span>{item.name}</span>
      </div>
    })

    return (

      <div className="qf-chart-three">
        <NavBar
          mode="light"
          icon={<Iconm type="left" />}
          onLeftClick={() => { this.props.history.replace("navPage") }}
          rightContent={[
            <Iconm key="1" type="ellipsis" />
          ]}
        >{itemData.name}</NavBar>
        <div className="qf-chart-three-main">
          {/* <Sale /> */}
          {/* <SaleDetail /> */}
          <GetTarget />
        </div>
        <div className="qf-chart-footer">
          {footerIcon}
        </div>
      </div>
    );
  }
}
export default App
