/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 15:45:54
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-14 16:37:11
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem("qfLoginInfo")
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>
)

export default PrivateRoute
