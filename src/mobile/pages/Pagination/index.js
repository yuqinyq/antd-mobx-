/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 14:50:21
 */
import React, { Component } from 'react'
import { Pagination, Icon } from 'antd-mobile';
import './index.less'

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};


class App extends Component {
  render() {
    return (
        <div className="pagination-container" >
          <p className="sub-title">Button with text</p>
          <Pagination total={5} current={1} locale={locale} />

          <p className="sub-title">Button with text and icon</p>
          <Pagination total={5}
            className="custom-pagination-with-icon"
            current={1}
            locale={{
              prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
              nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
            }}
          />

          <p className="sub-title">Hide number</p>
          <Pagination simple total={5} current={1} locale={locale} />

          <p className="sub-title">Show number only</p>
          <Pagination mode="number" total={5} current={3} />

          <p className="sub-title">Point style</p>
          <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />
        </div>
    )
  }
}


export default App
