
export const columns = (data) => {
  let len = (data, name) => {
    return data && data.filter(function (item, index) {
      return item.num === name;
    }).length;
  };

  let cache = {};
  return (
    [
      {
        title: '行号',
        dataIndex: 'key',
        width: 200,
      }, {
        title: '商品编号',
        dataIndex: 'num',
        width: 200,
        render: (text, row, index) => {
          console.log(data)
          const obj = {
            children: text,
            props: {}
          };
          if (cache[text]) {
            obj.props.rowSpan = 0;
          } else {
            cache[text] = text
            obj.props.rowSpan = len(data, text);
          }

          return obj
        }
      }, {
        title: '商品名称',
        dataIndex: 'name',
        width: 200,
      }, {
        title: '价格带',
        dataIndex: 'price',
        width: 200,
      }, {
        title: '品种数',
        dataIndex: 'varieties',
        width: 200,
      }, {
        title: '品种数占比（%）',
        dataIndex: 'varietiesPercent',
        width: 200,
      }, {
        title: '现有库存的品种数',
        dataIndex: 'varietiesNow',
        width: 200,
      }, {
        title: '当前库存数量',
        dataIndex: 'inventoryNum',
        width: 200,
      }, {
        title: '当前库存金额',
        dataIndex: 'inventoryMoney',
        width: 200,
      }, {
        title: '时段出库数量',
        dataIndex: 'timeNum',
        width: 200,
      }, {
        title: '时段出库成本金额',
        dataIndex: 'timeMoney',
        width: 200,
      }, {
        title: '周转天数',
        dataIndex: 'days',
        width: 200,
      }, {
        title: '周转率（次数）',
        dataIndex: 'times',
        width: 200,
      }
    ]
  )
}

