import React from 'react'
import { Card } from 'antd'
import Gauge from '../Gauge'

class DashboardCard extends React.Component {
  render() {
    return (
      <Card title="券核效率">
        <Gauge
          title= {'跳出率'}
          height={180}
          percent={87}
        /></Card>
    )
  }
}
export default DashboardCard
