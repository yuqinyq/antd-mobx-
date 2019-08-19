import React from 'react'
import ActivityCard from './ActivityCard'
import ForecastCard from './ForecastCard'
import DashboardCard from './DashboardCard'
import './index.less'


class BottomCard extends React.Component {
  render() {
    return (
      <div className='qf-bottom-card'>
          <ActivityCard/>
          <div className="qf-bottom-card-right">
             <ForecastCard/>
             <DashboardCard/>
          </div>

      </div>
    )
  }
}




export default BottomCard
