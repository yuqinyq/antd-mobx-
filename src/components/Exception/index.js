/*
 * @Descripttion:异常界面
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-16 15:18:52
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-16 15:36:30
 */
import React from 'react'
import { Result } from 'antd';
import { Link } from 'react-router-dom'

export const Exception = ({ type, link = '/', ...rest }) => {
  return (
    <Result
      status={type}
      title={type}
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to={link}>
        返回首页
        </Link>}
    />
  )
}
