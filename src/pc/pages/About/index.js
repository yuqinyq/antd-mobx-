/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-19 11:22:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-19 11:22:41
 */
import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

export default class About extends React.Component{
  render(){
    return (
      <div>
        <CustomBreadcrumb arr={['个人信息']}/>
        <TypingCard source={'这个人很懒，什么也没留下...'} title='个人信息' />
      </div>
    )
  }
}
