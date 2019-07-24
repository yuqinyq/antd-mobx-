import React from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'



class TopSale extends React.Component {
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
    const { id } = this.props
    var myChart = echarts.init(document.getElementById(id));
    const option = {
      grid: {
        x: 0,
        x2: 0,
        y: 0,
        y2: 0
      },
      tooltip: {
        trigger: 'axis',//鼠标经过提示
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.data.map(item => { return item.day }),
        axisLabel: false,
        axisLine: false
      },
      yAxis: {
        type: 'value',
        axisLabel: false,
        axisLine: false,
        splitLine: false
      },
      series: [{
        data: this.data.map(item => { return item.value }),
        type: 'line',
        symbol: "none",
        smooth: true,
        areaStyle: {
          normal: {
            color: 'rgba(58,160,255,0.5)'
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: 0,
            color: '#3aa0ff', //改变折线点的颜色
            lineStyle: {
              color: '#3aa0ff' //改变折线颜色
            }
          }
        },
      },
      ]
    }
    myChart.setOption(option)

  }
  render() {
    const { id } = this.props
    return <div id={id} style={{ width: '100%', height: '50px' }} />

  }
}

export default TopSale
