/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-25 17:57:32
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-19 10:35:48
 */
import React from 'react'
import { Input, Select, Button, Icon } from 'antd'
import { observer } from 'mobx-react'
import { DatePicker } from 'antd';
import ColumnsChoose from '../../../../../../components/ColumnsChoose'
import { columnsAll } from '../columns'
import './index.less'

const { RangePicker } = DatePicker
const { Search } = Input
const { Option } = Select;

@observer
class TopSearch extends React.Component {

  state = {
    expandForm: false,
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  handleFormReset = () => {
    const { store } = this.props
    store.fetchList({
      pageNo: 1,
      keyword: ''
    })
  }
  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  dateChange = (date, dateString) => {
    console.log(date, dateString)
  }
  render() {
    const { store } = this.props
    const { expandForm } = this.state
    return (
      <div className="qf-table-search">
        <div>
          <div className="qf-search-left">
            <div style={{ marginRight: '15px' }}>
              <span>价格带：</span>
              <Select defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="0">高</Option>
                <Option value="1">中</Option>
                <Option value="2">低</Option>
              </Select>
            </div>
            <div style={{ marginRight: '15px' }}>
              <span>使用状态：</span>
              <Select placeholder='请选择' style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="0">关闭</Option>
                <Option value="1">运行中</Option>
              </Select>
            </div>
            <div style={{ marginRight: '15px' }}>
              <span>商品名称：</span>
              <Search
                placeholder="请选择"
                onSearch={value => console.log(value)}
                style={{ width: 180 }}
              />
            </div>
            <Button type="primary" htmlType="submit"
              onClick={this.handleFormReset}>
              查询
          </Button>
            <Button
              style={{
                marginLeft: 8,
              }}
              onClick={this.handleFormReset}
            >
              重置
          </Button>
            {!expandForm ?
              <a
                style={{
                  marginLeft: 8,
                }}
                onClick={this.toggleForm}
              >
                展开 <Icon type="down" />
              </a> : <a
                style={{
                  marginLeft: 8,
                }}
                onClick={this.toggleForm}
              >
                收起 <Icon type="up" />
              </a>}
          </div>
          {expandForm ?
            <div className="qf-search-more">
              <div style={{ marginRight: '15px' }}>
                <span>日期范围：</span>
                <RangePicker onChange={this.dateChange} />
              </div>
              <div>
                <span>商品编号：</span>
                <Search
                  placeholder="请选择"
                  onSearch={value => console.log(value)}
                  style={{ width: 180 }}
                />
              </div>
            </div> : null}
        </div>
        <ColumnsChoose store={store} columnsAll={columnsAll} />
      </div>)
  }
}
export default TopSearch
