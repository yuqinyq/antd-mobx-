/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-20 15:40:32
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-20 15:54:30
 */
import React, { Component } from 'react'
const data = [
  { num: 322, name: '顾客总数（人）', color: '#17a2e7' },
  { num: 32, name: '今日新增顾客（人）', color: '#ff661a' },
  { num: 132, name: '消费笔数（笔）', color: '#35b35f' },
  { num: 232, name: '人均消费金额（元）', color: '#ffaa01' },
]

class Card extends Component {



  render() {
    const card = data.map(item => {
      return (
        <div key={item.name} style={{ backgroundColor: item.color }}>
          <span>{item.num}</span>
          <span>{item.name}</span>
        </div>
      )
    })
    return (<div className='qf-chart-card'>
      {card}
    </div>)
  }
}

export default Card
