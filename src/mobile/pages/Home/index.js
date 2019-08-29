/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 17:48:31
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 14:41:24
 */
import React, { Component } from 'react'
import { Tooltip, Icon, Progress } from 'antd'
import Gradient from './components/Gradient'
import BarList from './components/BarList'
import SaleType from './components/SaleType'
import './index.less'

class Home extends Component {

  card1() {
    return <div className="qf-card-percent">
      <div className="qf-card-up">
        <span>
          周同比
    </span>
        <span>
          12%
      <Icon type="caret-up" />
        </span>
      </div>
      <div className="qf-card-down">
        <span>
          日同比
    </span>
        <span>
          11%
      <Icon type="caret-down" />
        </span>
      </div>
    </div>
  }

  cardTitle(text) {
    return <div className="qf-card-title">
      <span>{text}</span>
      <Tooltip placement="top" title="指示说明">
        <Icon type="info-circle" />
      </Tooltip>
    </div>
  }
  render() {
    return (
      <div>
        <div className="qf-mobile-home padding-top-20">
          <div className="qf-home-item">
            {this.cardTitle('总销售额')}
            <div className="qf-card-price qf-margin-25">￥126,560</div>
            {this.card1()}
            <div className="qf-gutter-col-bottom">
              <span>日销售量</span>
              <span>￥12,423</span>
            </div>
          </div>
          <div className="qf-home-item">
            {this.cardTitle('访问量')}
            <div className="qf-card-price ">8846</div>
            <Gradient />
            <div className="qf-gutter-col-bottom">
              <span>日访问量</span>
              <span>1234</span>
            </div>
          </div>
          <div className="qf-home-item">
            {this.cardTitle('支付笔数')}
            <div className="qf-card-price">5675</div>
            <BarList />
            <div className="qf-gutter-col-bottom">
              <span>转换率</span>
              <span>60%</span>
            </div>
          </div>
          <div className="qf-home-item">
            {this.cardTitle('运营活动效果')}
            <div className="qf-card-price qf-margin-25">78%</div>
            <div>
              <Progress
                strokeColor={{
                  from: '#108ee9',
                  to: '#87d068',
                }}
                percent={78}
                status="active"
              />
            </div>
            <div className="qf-gutter-col-bottom">
              {this.card1()}
            </div>
          </div>
          <div className="qf-home-item">
            {this.cardTitle('销售额类别占比')}
            <SaleType />
          </div>
        </div>
      </div>

    )
  }
}
export default Home
