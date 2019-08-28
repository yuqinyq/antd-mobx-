/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 15:59:40
 */
import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { isAuthenticated } from '../../utils/LoginInfo'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    !!isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>
)

export default PrivateRoute
