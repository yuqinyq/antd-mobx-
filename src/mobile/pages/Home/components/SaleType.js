/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 11:46:25
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-22 09:56:47
 */
import React from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'

const data = [
  { value: 287, name: '家用电器' },
  { value: 310, name: '食用酒水' },
  { value: 234, name: '个护健康' },
  { value: 500, name: '服饰箱包' },
  { value: 300, name: '母婴产品' }
]

class SaleType extends React.Component {


  pieInfo = () => {
    var myChart = echarts.init(document.getElementById('qfSalePie'));
    const option = {
      grid: {
        top: '0',
        bottom: '0',
        right: '0',
        left: '0'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color: ['#1890ff', '#13c2c2', '#2fc25b', '#facc14', '#f04864'],
      // title: {//标题组件
      //   text: '销售额',
      //   textStyle: {
      //     color: "rgba(0,0,0,.65)",
      //     fontSize: "14"
      //   }
      // },
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: ['50%', '80%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              formatter: function (argument) {
                var html;
                html = '销售额\r\n\r\n' + '￥15,781';
                return html;
              },
              textStyle: {
                fontSize: '0.16rem',
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
          data: data
        }
      ]
    };

    myChart.setOption(option)
    window.onresize = setTimeout(function () {
      myChart.resize();
    },200)
  }
  componentDidMount() {
    this.pieInfo()
  }
  render() {
    return (
      <div id="qfSalePie" style={{ height: '1.5rem',width:'100%' }}></div>
    )

  }
}

export default SaleType
