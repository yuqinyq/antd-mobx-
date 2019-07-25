export const columns = (data) => {
  let len = (data, name, key) => {
    return data && data.filter(function (item, index) {
      return item[key] === name;
    }).length;
  };

  let cache = {};
  return [
    {
      title: '行号',
      dataIndex: 'key',
      width: 200,
    }, {
      title: '商品编号',
      dataIndex: 'num',
      width: 200,
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
          obj.props.rowSpan = len(data.list, text, 'num');
        }

        return obj
      }
    }, {
      title: '商品名称',
      dataIndex: 'name',
      width: 200,
      render: (text, row, index) => {
        const obj = {
          children: text,
          props: {}
        };
        if (cache[text]) {
          obj.props.rowSpan = 0;
        } else {
          cache[text] = text
          obj.props.rowSpan = len(data.list, text, 'name');
        }

        return obj
      }
    }, {
      title: '价格带',
      dataIndex: 'price',
      width: 200,
    }, {
      title: '品种数',
      children: [
        {
          title: '数量',
          dataIndex: 'varieties',
          width: 200,
        }, {
          title: '占比（%）',
          dataIndex: 'varietiesPercent',
          width: 200,
        }, {
          title: '现有库存',
          dataIndex: 'varietiesNow',
          width: 200,
        },
      ]
    }, {
      title: '当前库存',
      children: [{
        title: '数量',
        dataIndex: 'inventoryNum',
        width: 200,
      }, {
        title: '金额',
        dataIndex: 'inventoryMoney',
        width: 200,
      }]
    }, {
      title: '时段出库',
      children: [
        {
          title: '数量',
          dataIndex: 'timeNum',
          width: 200,
        }, {
          title: '成本金额',
          dataIndex: 'timeMoney',
          width: 200,
        }]
    }, {
      title: '周转', children: [
        {
          title: '天数',
          dataIndex: 'days',
          width: 200,
        }, {
          title: '周转率(次数）',
          dataIndex: 'times',
          width: 200,
        }
      ]
    }
  ]
}
