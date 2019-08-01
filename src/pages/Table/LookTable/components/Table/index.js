import React from "react";
import { Table } from 'antd';
import { observer } from 'mobx-react'

@observer
class TableList extends React.Component {


  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    const { store } = this.props
    return (
      <Table
        columns={store.columns}
        dataSource={store.list}
        bordered
        loading={store.loading}
        rowSelection={rowSelection}
        scroll={{y:370,x:'max-content'}}
        pagination={{
          total: store.total,
          pageSize: store.pageSize,
          current: store.pageNo,
          onChange: (pageNo) => {
            store.fetchList({
              pageNo
            })
          }
        }}
      />
    )
  }
}

export default TableList
