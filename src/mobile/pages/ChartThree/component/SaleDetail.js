/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-23 13:52:03
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-23 16:26:41
 */
import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import { DetailsListApi } from '../api'
import { Table, Progress } from 'antd'

const columns = [
  {
    title: '公司名称',
    dataIndex: 'name',
    key: 'name',
    align: 'center'
  }, {
    title: '日零售（万元）',
    key: 'tosale',
    key: 'tosale',
    align: 'center',
    children: [
      {
        title: '当日',
        key: 'today',
        align: 'center',
        dataIndex: 'today',
        sorter: (a, b) => a.today - b.today,
        render: (item) => {
          return <Progress percent={item} format={percent => `${percent}`} strokeWidth={14} strokeColor='#00e1ff' />
        }
      }, {
        title: '同期',
        key: 'todate',
        align: 'center',
        dataIndex: 'todate',
        sorter: (a, b) => a.todate - b.todate,
        render: (item) => {
          return <Progress percent={item} format={percent => `${percent}`} strokeWidth={14} strokeColor='#00e1ff' />
        }
      }, {
        title: '增长',
        key: 'increase',
        align: 'center',
        dataIndex: 'increase',
        sorter: (a, b) => a.increase - b.increase,
        render: (item) => {
          var reg = /^\d+(?=\.{0,1}\d+$|$)/
          return <span style={{ color: reg.test(item) ? '#ff0000' : 'rgb(0, 150, 0)' }}>{item}%</span>
        }
      }
    ]
  }, {
    title: '月零售（万元）',
    key: 'mouthSale',
    dataIndex: 'mouthSale',
    align: 'center',
    children: [
      {
        title: '当月',
        key: 'tomouth',
        dataIndex: 'tomouth',
        align: 'center',
        sorter: (a, b) => a.tomouth - b.tomouth,
        render: (item) => {
          return <Progress percent={Math.round(item / 25)} format={percent => `${percent * 25}`} strokeWidth={14} strokeColor='#fff200' />
        }
      }, {
        title: '同期',
        key: 'todate2',
        dataIndex: 'todate2',
        align: 'center',
        sorter: (a, b) => a.todate2 - b.todate2,
        render: (item) => {
          return <Progress percent={Math.round(item / 25)} format={percent => `${percent * 25}`} strokeWidth={14} strokeColor='#fff200' />
        }
      }
    ]
  }
]
class SaleDetail extends Component {

  state = {
    data: []
  }
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('detailsBar'));
    const option = {
      grid: {
        left: '10%',
        right: '5%',
        top: '15%',
        bottom: '15%'
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '当日零售金额', '同期零售金额'],
          ['北区', 300, 347],
          ['中区', 327, 313],
        ]
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
      },
      yAxis: {
        axisTick: {
          show: false
        },
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#3e9ae0',
            }
          },
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#d3d5ca',
            }
          }
        },
      ]
    };
    myChart.setOption(option);
    window.onresize = setTimeout(function () {
      myChart.resize();
    }, 200)
    this.listInfo()
  }
  listInfo = async () => {
    const data = await DetailsListApi()
    if (data.success) {
      this.setState({
        data: data.result
      })
    }
  }
  render() {
    const { data } = this.state
    return (
      <div className="qf-sale-details">
        <div id="detailsBar" style={{ height: '2rem', width: '100%' }}>

        </div>
        <div className="qf-sale-title">
          中区 销售明细表
        </div>
        <Table
          className="chart-detail-list"
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          size='small'
        />
      </div>
    )
  }

}
export default SaleDetail
