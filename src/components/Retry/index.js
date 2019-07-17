/*
 * @Descripttion:页面加载出错的处理界面
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-16 14:18:11
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-16 14:21:18
 */
import React from 'react'
import { Button } from 'antd'

export const RetryPage = ({ message, retry }) => {
  return (
    <div className="qf-retry-box">
      <span>{message}</span>
      <Button onClick={retry}>
        重试
      </Button>
    </div>
  )
}
