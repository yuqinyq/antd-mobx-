import React from "react";
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import TableList from './components/Table'
import TopSearch from './components/TopSearch'
import SearchListStore from './store'
import './index.less';


class LookTable extends React.Component {

constructor(props){
  super(props)
  this.store = new SearchListStore()
}
  componentDidMount(){
      this.store.fetchList({
        pageNo:1,
        pageSize:10,
        keyword:''
      })
  }

  render() {

    return (
      <div>
        <CustomBreadcrumb arr={['表单查询']} />
        <div className="qf-table-look">
          <TopSearch store={this.store}/>
          <TableList store={this.store} />
        </div>
      </div>
    )
  }
}

export default LookTable
