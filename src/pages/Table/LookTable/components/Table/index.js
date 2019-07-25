import React from "react";
import { DataListApi } from '../../api'
import { columns } from '../columns'
import { Table } from 'antd';



class TableList extends React.Component {

  state = {
    data: { list: [] },
    loading: false,
    pageNo: 1,
  }

  componentDidMount() {
    this.listInfo()
  }


  listInfo = async () => {
    this.setState({
      loading: true
    })
    const data = await DataListApi()
    if (data.success) {
      this.setState({
        data: data.result,
        loading: false,
      })
    }
  }

  render() {
    const { data, loading, pageNo } = this.state
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
          <Table
            columns={columns(data)}
            dataSource={data.list}
            bordered
            loading={loading}
            rowSelection={rowSelection}
            pagination={{
              total: data.count,
              pageSize: 8,
              current: pageNo,
              onChange: (pageNo) => {
                this.setState({
                  pageNo: pageNo
                }, () => {
                  this.listInfo()
                })
              }
            }}
          />
    )
  }
}

export default TableList
