/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-23 16:31:04
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-23 17:31:48
 */
import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';

class GetTarget extends Component {

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('chartTarget'));
    var myChart1 = echarts.init(document.getElementById('barTarget'))
    const option = {
      grid: {
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '零售占比',
          type: 'pie',
          radius: '70%',
          center: ['50%', '50%'],
          data: [
            { value: 510, name: '中区50%' },
            { value: 490, name: '北区49%' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              color: function (params) {
                //自定义颜色
                var colorList = [
                  '#ffb500', '#ff6347', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463',
                ];
                return colorList[params.dataIndex]
              }
            }
          }
        }
      ]
    };
    const option1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '5%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        splitLine:{show: false},//去除网格线
        "axisLine":{       //y轴
          "show":false

        },
      },
      yAxis: {
        type: 'category',
        data: ['上海分公司', '南京分公司', '南昌分公司', '杭州分公司', '济南分公司', '郑州分公司', '长沙分公司'],
        axisTick: {
          show: false
        },
        "axisLine":{       //y轴
          "show":false

        },
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight',
            }
          },
          data: [120, 202, 101, 234, 190, 230, 120]
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [220, 182, 191, 234, 290, 130, 310]
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [150, 212, 201, 154, 190, 330, 110]
        },
        {
          name: '搜索引擎',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [156, 275, 145, 234, 290, 133, 130]
        }
      ]
    };
    myChart.setOption(option);
    myChart1.setOption(option1)
    window.onresize = setTimeout(function () {
      myChart.resize();
    }, 200)
  }
  render() {
    return (
      <div className="qf-chart-target">
        <div className="qf-sale-title">
          月累计零售占比
        </div>
        <div id="chartTarget" style={{ height: '2.2rem', width: '100%' }}>
        </div>
        <div className="qf-sale-title">
          北区 月累计达成（万元）
        </div>
        <div id="barTarget" style={{ height: '3rem' }}>

        </div>
      </div>
    )
  }
}
export default GetTarget
