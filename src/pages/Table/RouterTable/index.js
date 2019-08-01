import React from 'react'
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import { Table, notification, Modal } from 'antd'
import ColumnsChoose from '../../../components/ColumnsChoose'
import { columnsChoose } from '../../../utils/list'
import { TableListApi } from './api'
import EditDrawer from './components/EditDrawer'
import './index.less'

const { confirm } = Modal

export default class RouterTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: { list: [] },
      loading: false,
      pageNo: 1,
      pageSize: 10,
      checkedKeys: ['index', 'name', 'date', 'action'],
      disabledKeys: ['index', 'name', 'action'],
      columns: [],
      isEidt: false,
      currentData: {}
    }
  }

  columnsAll =
    [
      {
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

      }, {
        title: '价格带',
        dataIndex: 'price',
        key: 'price',
        width: 200
      }, {
        title: '生产日期',
        key: 'date',
        dataIndex: 'date',
        width: 200
      },
      {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        width: 200,
        render: (text, data) => {
          return (
            <div>
              <span className='qf-edit-btn'
                style={{ marginRight: '15px' }}
                onClick={() => {
                  this.setState({
                    isEidt: true,
                    currentData: data
                  })
                }}
              >编辑</span>
              <span className='qf-del-btn'
                onClick={this.deleteInfo}
              >删除</span>
            </div>
          )
        }

      }
    ]

  deleteInfo = () => {
    confirm({
      title: '是否删除该条药品?',
      content: '',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        notification.success({ message: '提示', description: '删除成功' })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  componentDidMount() {
    this.listInfo()
  }

  onClose = () => {
    this.setState({
      isEidt: false,
      currentData: {}
    });
  };

  listInfo = async () => {
    const { checkedKeys } = this.state
    this.setState({ loading: true })
    const data = await TableListApi()
    if (data.success) {
      this.setState({
        data: data.result,
        loading: false,
        columns: columnsChoose(this.columnsAll, checkedKeys, 6)
      })
    }
  }

  render() {
    const { data, loading, pageNo, pageSize,
      checkedKeys, disabledKeys, columns, isEidt, currentData } = this.state
    return (
      <div>
        <CustomBreadcrumb arr={['表单路由']} />
        <div className="qf-table-router">
          <div className="qf-table-router-header">
            <ColumnsChoose store={{
              checkedKeys,
              disabledKeys,
              columnsChange: (checkedKeys) => {
                this.setState({
                  checkedKeys,
                  columns: columnsChoose(this.columnsAll, checkedKeys, 6)
                })
              }
            }} columnsAll={this.columnsAll} />
          </div>
          <Table
            columns={columns}
            dataSource={data.list}
            bordered
            loading={loading}
            scroll={{ y: 440, x: 'max-content' }}
            pagination={{
              total: data.count,
              pageSize: pageSize,
              current: pageNo,
              onChange: (pageNo) => {
                this.setState({
                  pageNo
                }, () => {
                  this.listInfo()
                })
              }
            }}
          />
        </div>
        <EditDrawer onClose={this.onClose} isEidt={isEidt} data={currentData} />
      </div>)
  }
}
