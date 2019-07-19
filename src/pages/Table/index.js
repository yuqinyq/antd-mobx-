import React, { Component } from "react";
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'


const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 9) {
    obj.props.colSpan = 0;
  }
  return obj;
};




class AntdTable extends Component {
  state = {
    data: { list: [] },
    loading: false,
    cache: {},
    // columns: columns([])
    newC: [
      {
        key: 1,
        num: "001",
        name: "商品自定义1",
        price: "高",
        varieties: 200,
        varietiesPercent: "10%",
        varietiesNow: 180,
        inventoryNum: 2000,
        inventoryMoney: "26001.00",
        timeNum: 1000,
        timeMoney: "1000.00",
        days: 72,
        times: 5
      },
      {
        key: 2,
        num: "001",
        name: "商品自定义1",
        price: "中",
        varieties: 200,
        varietiesPercent: "10%",
        varietiesNow: 180,
        inventoryNum: 2000,
        inventoryMoney: "26001.00",
        timeNum: 1000,
        timeMoney: "1000.00",
        days: 72,
        times: 5
      },
      {
        key: 3,
        num: "002",
        name: "商品自定义1",
        price: "高",
        varieties: 200,
        varietiesPercent: "10%",
        varietiesNow: 180,
        inventoryNum: 2000,
        inventoryMoney: "26001.00",
        timeNum: 1000,
        timeMoney: "1000.00",
        days: 72,
        times: 5
      },
      {
        key: 4,
        num: "002",
        name: "商品自定义1",
        price: "中",
        varieties: 200,
        varietiesPercent: "10%",
        varietiesNow: 180,
        inventoryNum: 2000,
        inventoryMoney: "26001.00",
        timeNum: 1000,
        timeMoney: "1000.00",
        days: 72,
        times: 5
      },
      {
        key: 5,
        num: "002",
        name: "商品自定义2",
        price: "高",
        varieties: 200,
        varietiesPercent: "10%",
        varietiesNow: 180,
        inventoryNum: 2000,
        inventoryMoney: "26001.00",
        timeNum: 1000,
        timeMoney: "1000.00",
        days: 72,
        times: 5
      },
      {
        key: 6,
        num: "003",
        name: "商品自定义2",
        price: "中",
        varieties: 200,
        varietiesPercent: "10%",
        varietiesNow: 180,
        inventoryNum: 2000,
        inventoryMoney: "26001.00",
        timeNum: 1000,
        timeMoney: "1000.00",
        days: 72,
        times: 5
      }
    ],
    low: [
      {
        title: "商品编号",
        dataIndex: "num",
        render: (text, record, index) => {
          console.log(record);

          const obj = {
            children: text,
            props: {},
          };
          const {
            ary,
            length
          } = this.mergeCells(record.num, this.state.newC, 'num')
          if (index === ary[0]) {
            obj.props.rowSpan = length;
          } else {
            obj.props.rowSpan = 0;
          }

          return obj;
        },
      },
      {
        title: "商品价格",
        dataIndex: "price",
        render: renderContent
      },
      {
        title: "商品品种",
        colSpan: 2,
        dataIndex: "name",
      },
      {
        title: "Phone",
        colSpan: 0,
        dataIndex: "varieties",
      },
      {
        title: "商品清单价格",
        dataIndex: "inventoryMoney",
      }
    ]
  }
  components = {
    header: {
      cell: ResizeableTitle,
    },
  };
  mergeCells = (text, array, columns) => {
    let ary = []
    array.map((item, index) => {
      if (item[columns] === text) {
        ary.push(index)
      }
    })
    return {
      ary,
      length: ary.length
    }
  }
  render() {
    const { data, loading } = this.state

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div>
        <CustomBreadcrumb arr={['表单组件']} />
        <div className='react-table'>
          <Table
            columns={this.state.low}
            dataSource={this.state.newC}
            bordered
            loading={loading}
            size="middle"
            rowSelection={rowSelection}
            components={this.components}
          />
        </div>

      </div>

    );
  }
}

export default AntdTable;
