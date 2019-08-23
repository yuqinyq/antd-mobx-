/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-22 15:57:06
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-23 13:49:49
 */
import React, { Component } from 'react'
import { Progress } from 'antd'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/gauge'
import ChinaMap from './ChinaMap'

class Sale extends Component {

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('dashboard'));
    const option = {
      grid: {
        left: 0,
        top: '10%',
        right: 0,
        bottom: 0
      },
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          radius: '100%',
          detail: {
            formatter: '{value}%',
            offsetCenter: [0, '-20%'],  // x, y，单位px
            fontSize: 12,

          },
          axisLine: { //仪表盘轴线样式
            lineStyle: {
              width: 10
            }
          },
          splitLine: { //分割线样式
            length: 10
          },
          pointer: {
            show: true,				// 是否显示指针,默认 true。
            length: "70%",			// 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
            width: 5,				// 指针宽度,默认 8。
          },


          data: [{ value: 92 }],


        }
      ]
    };
    myChart.setOption(option);
    window.onresize = setTimeout(function () {
      myChart.resize();
    },200)
  }

  render() {
    const moneyData = [{ name: '当前零售金额', price: '327' }, { name: '累计回款金额', price: '6,695' },
    { name: '当前同期零售金额', price: '74' }, { name: '累计回款目标', price: '2,939' }]
    const card = moneyData.map(item => {
      return (
        <div className="qf-sale-card" key={item.name}>
          <span className="qf-sale-card-title">{item.name}</span>
          <p className="qf-sale-card-item"><span>{item.price}</span>万元</p>
        </div>
      )
    })
    return (
      <div className="qf-chart-three-sale">
        {card}
        <div className="qf-sale-card">
          <span className="qf-sale-card-title">增长率</span>
          <div style={{ height: '1.26rem', paddingTop: '0.1rem' }}>
            <div id="dashboard" style={{ height: '1.24rem', width: '100%' }}>
            </div>
          </div>
        </div>
        <div className="qf-sale-card">
          <span className="qf-sale-card-title">目标达成率</span>
          <div className="qf-sale-progress">
            <Progress type="circle" percent={75} />
          </div>
        </div>
        <div className='qf-sale-title'>
          累计回款地图（万元）
        </div>
        <ChinaMap/>
      </div>

    )
  }
}
export default Sale
