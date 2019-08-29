/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 14:56:39
 */
import React, { Component } from 'react'
import { Table } from 'antd'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'
import { ChartListApi } from './api'
import './index.less'

const columns = [
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
    align: 'center'
  }, {
    title: '季度目标利润',
    key: 'quarter',
    dataIndex: 'quarter',
    align: 'center',
    children: [
      {
        title: '收入金额',
        key: 'money1',
        align: 'center',
        dataIndex: 'money1'
      }, {
        title: '净利润',
        key: 'netProfit1',
        align: 'center',
        dataIndex: 'netProfit1'
      }, {
        title: '净利率',
        key: 'netInterestRate1',
        align: 'center',
        dataIndex: 'netInterestRate1'
      }
    ]
  }, {
    title: '实际收入利润',
    key: 'actual',
    dataIndex: 'actual',
    align: 'center',
    children: [
      {
        title: '收入金额',
        key: 'money2',
        dataIndex: 'money2',
        align: 'center'
      }, {
        title: '净利润',
        key: 'netProfit2',
        dataIndex: 'netProfit2',
        align: 'center'
      }, {
        title: '净利率',
        key: 'netInterestRate2',
        dataIndex: 'netInterestRate2',
        align: 'center'
      }
    ]
  }
]

class App extends Component {
  state = {
    data: { list: [] }
  }

  listInfo = async () => {
    const data = await ChartListApi()
    if (data.success) {
      this.setState({
        data: data.result
      })
    }
  }
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('chartOne'));
    const option = {
      title: {
        left: 'left',
        text: '概率',
        show: false
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{a}:{c}',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        show: false,
        top: '30',
        bottom: '60',
        right: '45',
        left: '25'
      },
      legend: {
        data: ['实际收入金额', '净利率'],
        bottom: 0,
        textStyle: {
          color: '#666',
          fontSize: 12
        },
      },
      xAxis: [
        {
          type: 'category',
          data: ['四川', '北京', '上海', '重庆', '深圳', '广东', '陕西'],
          axisPointer: {
            type: 'shadow'

          },

          axisTick: {
            show: false
          },

        }
      ],

      //设置两个y轴，左边显示数量，右边显示概率

      yAxis: [
        {
          type: 'value',
          axisTick: {       //y轴刻度线
            "show": false
          },
          axisLine: {       //y轴
            "show": false

          },
        },
        {
          type: 'value',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: {       //y轴
            "show": false

          },
          axisTick: {       //y轴刻度线
            "show": false
          },
          splitLine: {
            show: false
          }
        }
      ],

      //每个设备分数量、概率2个指标，只要让他们的name一致，即可通过，legeng进行统一的切换
      series: [
        {
          name: '实际收入金额',
          type: 'bar',
          data: [6.6, 5, 2, 4, 3, 4.6, 5.6],
          barWidth: '45%',
          itemStyle: {
            normal: {
              color: '#36bafb'
            }
          }

        },
        {
          name: '净利率',
          type: 'line',
          yAxisIndex: 1,    //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
          data: [75, 65, 85, 66, 45, 55, 56],
          symbolSize: 10,
          itemStyle: {
            normal: {
              color: "#c23531"
            }

          }
        }
      ]
    };
    myChart.setOption(option)
    window.onresize = function () {
      myChart.resize();
    }
    this.listInfo()
  }

  render() {
    const { data } = this.state
    return (
      <div className="chart-box">
        <div className="chart-box-content">
          <div id='chartOne' style={{ height: '3rem' }} />
          <Table
            className="chart-box-list"
            columns={columns}
            dataSource={data.list}
            bordered
            pagination={false}
            size='small'
          />
        </div>
      </div>
    );
  }
}
export default App
