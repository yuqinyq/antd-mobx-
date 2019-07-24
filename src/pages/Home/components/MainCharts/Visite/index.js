import React from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'
import { MainDataApi } from '../../../api'


class VisiteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  async componentDidMount() {
    const saleData = await MainDataApi()
    if (saleData.success) {
      this.setState({
        data: saleData.result
      }, () => {
        const data1 = this.state.data.data1;
        var myChart = echarts.init(document.getElementById('visiteList'));
        const option = {
          grid: {
            top: 40,
            left: 50,
            bottom: 30
          },
          title: {
            text: '访问量趋势',
            textStyle: {
              color: '#000000d9',
              fontSize: 14,
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'axis',//鼠标经过提示
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: data1.map(item => { return item.month }),
          },
          yAxis: {
            type: 'value',
            splitLine: {    //网格线
              lineStyle: {
                type: 'dashed'    //设置网格线类型 dotted：虚线   solid:实线
              },
              show: true //隐藏或显示
            }

          },
          series: [{
            data: data1.map(item => { return item.value }),
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#58afff',

              }
            },
            barWidth: 30,
          },
          ]
        }
        myChart.setOption(option)
      })
    }
  }
  render() {
    const data2 = this.state.data.data2 || []
    const link = data2.map(item => {
      return <div className="qf-link-item">
        <span className={item.key < 3 ? 'qf-link-number' : ''} key={item.key}>{item.key + 1}</span>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </div>
    })
    return <div className="qf-main">
      <div id='visiteList' style={{ width: '75%', height: '300px' }} />
      <div>
        <p>门店访问量排名</p>
        <div className="qf-link-list">
          {link}
        </div>
      </div>
    </div>


  }
}
export default VisiteList
