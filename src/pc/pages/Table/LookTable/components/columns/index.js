/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-25 14:57:32
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-19 10:36:33
 */
import { enjambment, columnsChoose } from '../../../../../../utils/list'
import React from 'react'

export const columns = (data, checkedKeys) => {

  let cache = {};
  let columusList = [
    {
      title: '行号',
      dataIndex: 'key',
      key: 'key',
      width:100,
    }, {
      title: '商品编号',
      dataIndex: 'num',
      key: 'num',
      width:200,
      align: 'center',
      className: 'qf-td-middle',
      render: (text, row, index) => {
        const obj = {
          children: text,
          props: {}
        };
        if (cache[text]) {
          obj.props.rowSpan = 0;
        } else {
          cache[text] = text
          obj.props.rowSpan = enjambment(data, text, 'num');
        }

        return obj
      }
    }, {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      width:200,
      filters: [
        {
          text: '商品1',
          value: '商品1',
        },
        {
          text: '商品2',
          value: '商品2',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      render: (text, row, index) => {
        const obj = {
          children: text,
          props: {}
        };
        if (cache[text]) {
          obj.props.rowSpan = 0;
        } else {
          cache[text] = text
          obj.props.rowSpan = enjambment(data, text, 'name');
        }

        return obj
      }
    }, {
      title: '价格带',
      dataIndex: 'price',
      key: 'price',
      width:200,
    }, {
      title: '品种数',
      dataIndex: 'varietiesData',
      key: 'varietiesData',
      children: [
        {
          title: '数量',
          dataIndex: 'varieties',
          key: 'varieties',
          width:200,
          sorter: (a, b) => a.varieties - b.varieties,
        }, {
          title: '占比（%）',
          dataIndex: 'varietiesPercent',
          key: 'varietiesPercent',
          width:200,
        }, {
          title: '现有库存',
          dataIndex: 'varietiesNow',
          key: 'varietiesNow',
          width:200,
        },
      ]
    }, {
      title: '当前库存',
      dataIndex: 'nowStock',
      key: 'nowStock',
      children: [{
        title: '数量',
        dataIndex: 'inventoryNum',
        key: 'inventoryNum',
        width:200,
      }, {
        title: '金额',
        dataIndex: 'inventoryMoney',
        key: 'inventoryMoney',
        width:200,
      }]
    }, {
      title: '时段出库',
      dataIndex: 'outStock',
      key: 'outStock',
      children: [
        {
          title: '数量',
          dataIndex: 'timeNum',
          key: 'timeNum',
          width:200,
        }, {
          title: '成本金额',
          dataIndex: 'timeMoney',
          key: 'timeMoney',
          width:200,
        }]
    }, {
      title: '周转',
      dataIndex: 'turnover',
      key: 'turnover',
      children: [
        {
          title: '天数',
          dataIndex: 'days',
          key: 'days',
          width:200,
        }, {
          title: '周转率(次数）',
          dataIndex: 'times',
          key: 'times',
          width:200,
        }
      ]
    },{
      title:'操作',
      dataIndex:'action',
      key:'action',
      // fixed:'right',
      width:100,
      render:()=>{
        return <span className="qf-edit-btn">编辑</span>
      }
    }
  ]

  return columnsChoose(columusList, checkedKeys)
}


export const columnsAll = [
  {
    title: '行号',
    key: 'key'
  }, {
    title: '商品编号',
    key: 'num'
  }, {
    title: '商品名称',
    key: 'name'
  }, {
    title: '价格带',
    key: 'price',
  }, {
    title: '品种数',
    key: 'varietiesData',
    children: [
      {
        title: '数量',
        key: 'varieties',

      }, {
        title: '占比（%）',
        key: 'varietiesPercent',
      }, {
        title: '现有库存',
        key: 'varietiesNow',
      },
    ]
  }, {
    title: '当前库存',
    key: 'nowStock',
    children: [{
      title: '数量',
      key: 'inventoryNum',
    }, {
      title: '金额',
      key: 'inventoryMoney',
    }]
  }, {
    title: '时段出库',
    key: 'outStock',
    children: [
      {
        title: '数量',
        key: 'timeNum',
      }, {
        title: '成本金额',
        key: 'timeMoney',
      }]
  }, {
    title: '周转',
    key: 'turnover',
    children: [
      {
        title: '天数',
        key: 'days',
      }, {
        title: '周转率(次数）',
        key: 'times',
      }
    ]
  },{
    title:'操作',
    key:'action'
  }
]



