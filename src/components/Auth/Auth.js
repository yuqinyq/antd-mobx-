/*
 * @Descripttion:权限拦截
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-16 17:44:46
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-17 11:33:08
 */

import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'


class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: false, // 是否登录
    }
  }

  componentWillMount() {
    const dataJson = JSON.parse(localStorage.getItem("qfLoginInfo"));
    console.log(dataJson, '.....')
    if (
      dataJson &&
      dataJson.userName === "admin" &&
      dataJson.password === "123456"
    ) {
      this.setState({
        logged: true
      });
    } else {
      return;
    }
  }
  render() {
    const { children } = this.props
    const { logged } = this.state
    // if (this.state.auth) {
    //   return (
    //     <React.Fragment>
    //       {this.state.logged ? children : <Redirect to="/login" />}
    //     </React.Fragment>
    //   )
    // } else {
    //   return null
    // }
    console.log(logged)
    return (
      <React.Fragment>
        {logged ? children : <Redirect to="/login" />}
      </React.Fragment>
    );
  }
}

export default withRouter(Auth)
