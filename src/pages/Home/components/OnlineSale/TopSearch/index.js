import React from 'react'
import { Card, Menu, Dropdown, Table, Icon } from 'antd'
import SearchLine from './component/SearchLine'
import SaleLine from './component/SaleLine'
import { TopListApi } from '../../../api'
import './index.less'


const columns = [
  {
    title: '排名',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: '用户数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
  },
  {
    title: '周涨幅',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <span className="qf-list-range">
        {text}%
        <Icon type="caret-up" />
      </span>
    ),
  },
];


class TopSearch extends React.Component {
  state = {
    data: { list: [] }
  }

  componentDidMount() {
    this.listInfo()
  }
  listInfo = async () => {
    const data = await TopListApi()
    if (data.success) {
      this.setState({
        data: data.result
      })
    }
  }

  render() {
    const {data} = this.state
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

    const more = <Dropdown overlay={menu} placement="bottomLeft">
      <a>. . .</a>
    </Dropdown>
    return (
      <Card title="线上热门搜索" extra={more}>
        <div className="qf-top-box">
          <div className="qf-top-line">
            <SearchLine />
            <SaleLine />
          </div>
          <div className="qf-top-list">
            <Table
              rowKey={record => record.index}
              size="small"
              columns={columns}
              dataSource={data.list}
              pagination={{
                total:data.count,
                style: {
                  marginBottom: 0,
                },
                pageSize: 5,
              }}
            />
          </div>
        </div>
      </Card>
    )

  }
}

export default TopSearch
