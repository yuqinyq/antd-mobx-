import React from 'react'
import TopCard from './components/TopCard'
import MainCharts from './components/MainCharts'
import OnlineSale from './components/OnlineSale'
import BottomCard from './components/BottomCard'
import './index.less'


class Home extends React.Component {
  render() {
    return (
      <div className='qf-home'>
          <TopCard/>
          <MainCharts/>
          <OnlineSale/>
          <BottomCard/>
      </div>
    )
  }
}




export default Home
