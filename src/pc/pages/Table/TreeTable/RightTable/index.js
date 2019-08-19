import React from "react";
import { Table } from 'antd'
import { Input } from 'antd';

const { Search } = Input;

const columns = [{
  title: '行号',
  dataIndex: 'index',
  key: 'index',
  width: 200,
}, {
  title: '药品名',
  dataIndex: 'name',
  key: 'name',
  width: 200,
}, {
  title: '数量',
  dataIndex: 'count',
  key: 'count',
  width: 200,
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  width: 200,

}]

export default class RightTable extends React.Component {

  state = {
    pageNo: 1
  }

  render() {
    const { data, loading, cb } = this.props
    const { pageNo } = this.state
    return (
      <div className="qf-table-right">
        <div className="qf-tableRight-search">
          <Search placeholder="关键字"
            onSearch={value => {
              cb()
            }}
            enterButton
            style={{width:'300px'}}
          />
        </div>
        <Table
          columns={columns}
          dataSource={data.list}
          loading={loading}
          pagination={{
            total: data.count,
            pageSize: 10,
            current: pageNo,
            onChange: (pageNo) => {
              this.setState({
                pageNo
              })
              cb()
            }
          }}
        />
      </div>
    )

  }
}
