import React from 'react'
import TopSearch from './TopSearch'
import SaleType from './SaleType'
import './index.less'

class OnlineSale extends React.Component {

  render() {
    return (
      <div className='qf-online-sale'>
        <TopSearch />
        <SaleType />
      </div>
    )

  }
}

export default OnlineSale
