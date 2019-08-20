/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 11:08:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-20 16:38:14
 */
import React from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'



class Pie extends React.Component {
  data = [
    { value: 300, name: '分店1' },
    { value: 110, name: '分店2' },
    { value: 334, name: '分店3' },
    { value: 400, name: '分店4' },
  ]
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('qfChartPie'));
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color: ['#17a2e7', '#ff661a' ,'#35b35f', '#ffaa01'],
      series: [
        {
          name: '营业额',
          type: 'pie',
          radius: ['30%', '70%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              formatter: function (argument) {
                var html;
                html = '分店\r\n\r\n' + '营业额';
                return html;
              },
              textStyle: {
                fontSize: 16,
                color: "rgba(0,0,0,.65)",
              }
            },
            emphasis: {
              show: false,
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:this.data
        }
      ]
    }
    myChart.setOption(option)
  }
  render() {

    return <div id='qfChartPie' style={{ height: '100%' }} />

  }
}

export default Pie
