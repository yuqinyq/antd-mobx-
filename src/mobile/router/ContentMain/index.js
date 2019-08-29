/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-29 10:23:06
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 14:16:19
 */
import React, { Component } from 'react'
import { Switch, withRouter, Redirect } from 'react-router-dom'
import LoadableComponent from '../../../utils/LoadableComponent'
import PrivateRoute from '../../../components/PrivateRoute'


const Home = LoadableComponent(() => import('../../pages/Home/index'))

const Drawer = LoadableComponent(() => import('../../pages/Drawer/index'))
const Pagination = LoadableComponent(() => import('../../pages/Pagination/index'))
const SegmentedControl = LoadableComponent(() => import('../../pages/SegmentedControl/index'))
const Tabs = LoadableComponent(() => import('../../pages/Tabs/index'))
const TabBar = LoadableComponent(() => import('../../pages/TabBar/index'))
const Calendar = LoadableComponent(() => import('../../pages/Calendar/index'))
const InputItem = LoadableComponent(() => import('../../pages/InputItem/index'))
const Carousel = LoadableComponent(() => import('../../pages/Carousel/index'))

const ChartOne = LoadableComponent(() => import('../../pages/ChartOne/index'))
const ChartTwo = LoadableComponent(() => import('../../pages/ChartTwo/index'))
const ChartThree = LoadableComponent(() => import('../../pages/ChartThree/index'))


@withRouter
class ContentMain extends Component {
  render() {
    return <div className="qf-mobile-content">
      <Switch>
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/home/main' component={Home} />
        <PrivateRoute exact path='/home/antd/drawer' component={Drawer} />
        <PrivateRoute exact path='/home/antd/pagination' component={Pagination} />
        <PrivateRoute exact path='/home/antd/segmentedControl' component={SegmentedControl} />
        <PrivateRoute exact path='/home/antd/tabs' component={Tabs} />
        <PrivateRoute exact path='/home/antd/drawer' component={Drawer} />
        <PrivateRoute exact path='/home/antd/pagination' component={Pagination} />
        <PrivateRoute exact path='/home/antd/segmentedControl' component={SegmentedControl} />
        <PrivateRoute exact path='/home/antd/tabs' component={Tabs} />
        <PrivateRoute exact path='/home/antd/drawer' component={Drawer} />
        <PrivateRoute exact path='/home/antd/pagination' component={Pagination} />
        <PrivateRoute exact path='/home/antd/segmentedControl' component={SegmentedControl} />
        <PrivateRoute exact path='/home/antd/tabs' component={Tabs} />
        <PrivateRoute exact path='/home/antd/tabBar' component={TabBar} />
        <PrivateRoute exact path='/home/antd/calendar' component={Calendar} />
        <PrivateRoute exact path='/home/antd/inputItem' component={InputItem} />
        <PrivateRoute exact path='/home/antd/carousel' component={Carousel} />
        <PrivateRoute exact path='/home/chart/one' component={ChartOne} />
        <PrivateRoute exact path='/home/chart/two' component={ChartTwo} />
        <PrivateRoute exact path='/home/chart/three' component={ChartThree} />
        <Redirect exact from='/' to='/home' />
      </Switch>
    </div>
  }
}

export default ContentMain
