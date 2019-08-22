/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 11:08:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-22 09:57:41
 */
import React from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'



class Gradient extends React.Component {
  data = [
    { day: '2019-07-23', value: 7 },
    { day: '2019-07-24', value: 6 },
    { day: '2019-07-25', value: 3 },
    { day: '2019-07-26', value: 5 },
    { day: '2019-07-27', value: 4 },
    { day: '2019-07-28', value: 6 },
    { day: '2019-07-29', value: 7 },
    { day: '2019-07-30', value: 9 },
    { day: '2019-07-31', value: 4 },
    { day: '2019-08-01', value: 7 },
    { day: '2019-08-02', value: 6 },
    { day: '2019-08-03', value: 3 },
    { day: '2019-08-04', value: 7 },
    { day: '2019-08-05', value: 4 },
    { day: '2019-08-06', value: 3 },
    { day: '2019-08-07', value: 7 },
    { day: '2019-08-08', value: 4 },
  ]
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('qfChartLine'));
    const option = {
      grid: {
        top: '40',
        bottom: '40',
        right: '20',
        left: '20',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',//鼠标经过提示
      },
      xAxis: {
        type: 'category',
        data: this.data.map(item => { return item.day }),
        axisLine: {
          lineStyle: {
            color: '#ccc', // 颜色

          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#ccc', // 颜色

          }
        },
        axisTick: {
          show: false
        }
      },
      series: [{
        data: this.data.map(item => { return item.value }),
        type: 'line',

        areaStyle: {
          normal: {
            color: '#0bbfa2'
          }
        },
        itemStyle: {
          normal: {
            color: '#6ee8d5',
            lineStyle: {
              color: '#0bbfa2' //改变折线颜色
            }
          }
        },
      },
      ]
    }
    myChart.setOption(option)
    window.onresize = setTimeout(function () {
      myChart.resize();
    },200)
  }
  render() {

    return <div id='qfChartLine' style={{ height: '100%' }} />

  }
}

export default Gradient
