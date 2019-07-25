import React from "react";
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import TableList from './components/Table'
import TopSearch from './components/TopSearch'
import './index.less';


class LookTable extends React.Component {

  render() {

    return (
      <div>
        <CustomBreadcrumb arr={['表单查询']} />
        <div className="qf-table-look">
          <TopSearch />
          <TableList />
        </div>
      </div>
    )
  }
}

export default LookTable
