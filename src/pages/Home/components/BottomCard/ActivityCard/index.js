import React from 'react'
import { Card, Row, Col, Statistic, Tooltip } from 'antd'

const data = {
  transaction: '124,543,233',
  target: '92%',
  time: 0,
  secondPrice: 234
}

class ActivityCard extends React.Component {
  render() {
    return (
      <Card title="活动实时交易情况">
        <Row gutter={10}>
          <Col span={6}>
            <Statistic title="今日交易总额(元)" value={data.transaction} />
          </Col>
          <Col span={6}>
            <Statistic title="销售目标完成率" value={data.target} />
          </Col>
          <Col span={6}>
            <Statistic title="活动剩余时间" value={data.time} />
          </Col>
          <Col span={6}>
            <Statistic title="每秒交易总额(元)" value={data.secondPrice} />
          </Col>
        </Row>
        <div className="qf-bottom-card-map">
          <Tooltip
            title={"Waiting for implementation"}
          >
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
              alt="map"
            />
          </Tooltip>
        </div>
      </Card>
    )
  }
}




export default ActivityCard
