import React from 'react'
import { Tooltip, Icon } from 'antd'
import TopSale from './TopSale'


export default class SearchLine extends React.Component {

  render() {
    return (<div>
      <div className="qf-search-title">
        <span>搜索用户数</span>
        <Tooltip placement="top" title="指示说明">
          <Icon type="info-circle" />
        </Tooltip>
      </div>
      <div className="qf-search-data">
        <span>12,321</span>
        <span>15.1
        <Icon type="caret-up" />
        </span>
      </div>
      <TopSale  id={'searchline'}/>
    </div>)
  }
}
