import React from 'react'
import { Card, Table, Divider } from 'antd'
import axios from 'axios'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'


const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '角色',
    dataIndex: 'role_str',
    key: 'role_str',
  },
  {
    title: '添加时间',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'id',
    render: (text, record) => (
      <span>
        <a href="javascript:;" onClick={handleEdit}>编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;" onClick={handleEdit}>删除</a>
      </span>
    )
  },
];
const handleEdit = function(){
  console.log(123)
}

class TableDemo extends React.Component {
  state = {
    loading: false,
    pagination: {
      pageSize: 8
    },
    dataSource: []
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.getData();
  }
  getData = () => {
    axios.post('api/admin/list', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then(res => {
      this.setState({
        dataSource: res.data.data.data,
        loading: false,
      })
    })
  }

  render() {
    const cardContent = 
      `<ul class="card-ul">
        <li>当有大量结构化的数据需要展现时</li>
        <li>标当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时</li>
      </ul>`
    let { dataSource } = this.state
    return (
      <div>
        <CustomBreadcrumb arr={['显示', '表格']}/>
        <TypingCard id='howUse' source={cardContent} height={178}/>
        <Card bordered={false} title='基本用法' style={{marginBottom: 10}} id='basicUsage'>
          <Table dataSource={dataSource} columns={columns} style={styles.tableStyle} rowKey='id' />
        </Card>
      </div>
    )
  }
}

const styles = {
  tableStyle: {
    // width: '80%'
  },
  affixBox: {
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170
  }
}

export default TableDemo