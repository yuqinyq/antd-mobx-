/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-22 15:57:06
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-23 13:49:21
 */
import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';



const mydata = [
  {
    name: '河北',
    value: 4
  },
  {
    name: '山东',
    value: 3
  },
  {
    name: '河南',
    value: 4
  },
  {
    name: '重庆',
    value: 4
  },
  {
    name: '广西',
    value: 4
  },
  {
    name: '四川',
    value: 5
  },
  {
    name: '海南',
    value: 4
  },
  {
    name: '北京',
    value: 4
  },
  {
    name: '天津',
    value: 4
  },
  {
    name: '上海',
    value: 4
  },
  {
    name: '江苏',
    value: 3
  },
  {
    name: '浙江',
    value: 3
  },
  {
    name: '福建',
    value: 3
  },
  {
    name: '安徽',
    value: 4
  },
  {
    name: '江西',
    value: 3
  },
  {
    name: '湖北',
    value: 4
  },
  {
    name: '湖南',
    value: 4
  },
  {
    name: '广东',
    value: 4
  },
  {
    name: '辽宁',
    value: 4
  },
  {
    name: '吉林',
    value: 3
  },
  {
    name: '黑龙江',
    value: 3
  },
  {
    name: '内蒙古',
    value: 3
  },
  {
    name: '云南',
    value: 4
  },
  {
    name: '贵州',
    value: 4
  },
  {
    name: '山西',
    value: 4
  },
  {
    name: '陕西',
    value: 4
  },
  {
    name: '甘肃',
    value: 4
  },
  {
    name: '新疆',
    value:5
  },
  {
    name: '西藏',
    value: 3
  },
  {
    name: '青海',
    value: 4
  },
  {
    name: '宁夏',
    value: 4
  },
  {
    name: '台湾',
    value: 4
  },
  {
    name: '香港',
    value: 3
  },
  {
    name: '澳门',
    value: 3
  },
  {
    name: '南海诸岛',
    value: 0,
    "itemStyle": {
      "normal": {
        "opacity": 0,
        "label": {
          "show": false
        }
      }
    }
  }
];

class ChinaMap extends Component {

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('chinaMap'));
    const option = {

      grid: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      },
      title: {
        text: '',
        subtext: '',
        x: 'center',
        y: '5%'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      roam: true,
      dataRange: {
        min: 0,
        max: 5,
        x: '5%',
        y: '75%',

        splitList: [{
          start: 4,
          end: 5,
          label: '>400万元',
          color: '#c23531'
        },
        {
          start: 3.5,
          end: 4,
          label: '100-400万元',
          color: '#63869e'
        },
        {
          start: 2.5,
          end: 3.5,
          label: '≤100万元',
          color: '#91c7ae'
        },

        ],
        color: ['#c23531','#63869e', '#91c7ae',],

      },
      roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [{
        name: '投标',
        type: 'map',
        mapType: 'china',
        zoom: 1.2,
        roam: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 10,
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }

        },
        data: mydata,
      }]
    }
    myChart.setOption(option, true);
    window.onresize = setTimeout(function () {
      myChart.resize();
    },200)
  }
  render() {
    return (
      <div id='chinaMap' style={{ height: '3rem', width: '100%' }}>

      </div>

    )
  }
}
export default ChinaMap
