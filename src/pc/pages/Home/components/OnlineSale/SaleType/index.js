/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-24 10:10:15
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-22 10:19:34
 */
import React from 'react'
import { Card, Menu, Dropdown, Radio } from 'antd'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

const data = {
  data1: [
    { value: 287, name: '家用电器' },
    { value: 310, name: '食用酒水' },
    { value: 234, name: '个护健康' },
    { value: 500, name: '服饰箱包' },
    { value: 300, name: '母婴产品' }
  ],
  data2: [
    { value: 300, name: '家用电器' },
    { value: 110, name: '食用酒水' },
    { value: 334, name: '个护健康' },
    { value: 400, name: '服饰箱包' },
    { value: 123, name: '母婴产品' }
  ],
  data3: [
    { value: 387, name: '家用电器' },
    { value: 110, name: '食用酒水' },
    { value: 324, name: '个护健康' },
    { value: 200, name: '服饰箱包' },
    { value: 240, name: '母婴产品' }
  ]
}

class SaleType extends React.Component {
  state = {
    type: "all"
  }



  pieInfo = () => {
    const { type } = this.state
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
      legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        data: data.data1.map((item) => { return item.name }),
        icon: 'circle',
        align: 'left',
        itemWidth: 8,
        textStyle: {    //图例文字的样式
          color: "rgba(0,0,0,.65)",  //文字颜色
          fontSize: 14   //文字大小
        }
      },
      color: ['#1890ff', '#13c2c2', '#2fc25b', '#facc14', '#f04864'],
      title: {//标题组件
        text: '销售额',
        textStyle: {
          color: "rgba(0,0,0,.65)",
          fontSize: "14"
        }
      },
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: ['50%', '70%'],
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
          data: type === 'all' ? data.data1 : type === 'online' ? data.data2 : data.data3
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
  handleChangeSalesType = (e) => {
    this.setState({
      type: e.target.value
    }, () => {
      this.pieInfo()
    })
  }
  render() {
    const { type } = this.state
    const menu = (
      <Menu>
        <Menu.Item>
          <a href="#">
            操作一
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">
            操作二
          </a>
        </Menu.Item>
      </Menu>
    );

    const more = <div style={{ display: 'flex' }}>
      <div style={{ "marginRight": '20px' }}>
        <Radio.Group value={type} onChange={this.handleChangeSalesType}>
          <Radio.Button value="all">
            全部渠道
          </Radio.Button>
          <Radio.Button value="online">
            线上
          </Radio.Button>
          <Radio.Button value="stores">
            门店
          </Radio.Button>
        </Radio.Group>
      </div>
      <Dropdown overlay={menu} placement="bottomLeft">
        <a>. . .</a>
      </Dropdown>
    </div>


    return (
      <Card title="销售额类别占比" extra={more}>
        <div id="qfSalePie" style={{height: '300px' ,width:'500px'}}>

        </div>
      </Card>
    )

  }
}

export default SaleType
