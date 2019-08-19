import React from "react";
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import LeftTree from './LeftTree'
import RightTable from './RightTable'
import { TreeListApi, TableListApi } from './api'
import './index.less'

export default class TreeTable extends React.Component {

  state = {
    treeData: [],
    tableData: { list: [] },
    loading: false
  }

  componentDidMount() {
    this.treeInfo()
    this.tableInfo()
  }
  treeInfo = async () => {
    const data = await TreeListApi()
    if (data.success) {
      this.setState({
        treeData: data.result
      })
    }
  }
  tableInfo = async () => {
    this.setState({ loading: true })
    const data = await TableListApi()
    if (data.success) {
      this.setState({
        tableData: data.result,
        loading: false
      })
    }
  }
  render() {
    const { treeData, loading, tableData } = this.state
    return <div className="qf-table">
      <CustomBreadcrumb arr={['表单树形']} />
      <div className="qf-table-tree">
        <LeftTree data={treeData} cb={()=>{this.tableInfo()}}/>
        <RightTable loading={loading} data={tableData} cb={()=>{
          this.tableInfo()
        }} />
      </div>
    </div>
  }
}
