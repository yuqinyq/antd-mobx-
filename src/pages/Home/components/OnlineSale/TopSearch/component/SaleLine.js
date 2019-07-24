import React from 'react'
import { Tooltip, Icon } from 'antd'
import TopSale from './TopSale'


export default class SaleLine extends React.Component {

  render() {
    return (<div>
      <div className="qf-search-title">
        <span>人均搜索次数</span>
        <Tooltip placement="top" title="指示说明">
          <Icon type="info-circle" />
        </Tooltip>
      </div>
      <div className="qf-search-data">
        <span>2.7</span>
        <span>26.2
        <Icon type="caret-down" />
        </span>
      </div>
      <TopSale id={'saleline'}/>
    </div>)
  }
}
