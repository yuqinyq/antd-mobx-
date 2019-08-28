/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 16:07:39
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-28 11:47:30
 */
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'


const NavPage = LoadableComponent(() => import('../pages/NavPage/index'))
const Home = LoadableComponent(() => import('../pages/Home/index'))
const Drawer = LoadableComponent(() => import('../pages/Drawer/index'))
const Menu = LoadableComponent(() => import('../pages/Menu/index'))
const Pagination = LoadableComponent(() => import('../pages/Pagination/index'))
const SegmentedControl = LoadableComponent(() => import('../pages/SegmentedControl/index'))
const Tabs = LoadableComponent(() => import('../pages/Tabs/index'))
const TabBar = LoadableComponent(() => import('../pages/TabBar/index'))
const Calendar = LoadableComponent(() => import('../pages/Calendar/index'))
const InputItem = LoadableComponent(() => import('../pages/InputItem/index'))
const Carousel = LoadableComponent(() => import('../pages/Carousel/index'))
const ChartOne = LoadableComponent(() => import('../pages/ChartOne/index'))
const ChartTwo = LoadableComponent(() => import('../pages/ChartTwo/index'))
const ChartThree = LoadableComponent(() => import('../pages/ChartThree/index'))

class Router extends Component {

  render() {
    return (
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path='/navPage' component={NavPage} />
        <Route path='/home' component={Home} />
        <Route path='/drawer' component={Drawer} />
        <Route path='/menu' component={Menu} />
        <Route path='/pagination' component={Pagination} />
        <Route path='/segmentedControl' component={SegmentedControl} />
        <Route path='/tabs' component={Tabs} />
        <Route path='/tabBar' component={TabBar} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/inputItem' component={InputItem} />
        <Route path='/carousel' component={Carousel} />
        <Route path='/chartOne' component={ChartOne} />
        <Route path='/chartTwo' component={ChartTwo} />
        <Route path='/chartThree' component={ChartThree} />
      </Switch>
    )
  }
}
export default Router
