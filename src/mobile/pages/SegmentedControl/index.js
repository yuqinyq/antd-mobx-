/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-15 16:01:31
 */
import React, { Component } from 'react'
import { SegmentedControl, WingBlank } from 'antd-mobile';
import NavBarHeader from '../../components/NavBarHeader'
import './index.less'

class App extends Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div>
        <NavBarHeader title="分段器" cb={() => {
          this.props.history.replace("navPage");
        }} />
        <WingBlank size="lg" className="sc-example">
          <p className="sub-title">Simplest</p>
          <SegmentedControl values={['Segment1', 'Segment2']} />

          <p className="sub-title">Disabled</p>
          <SegmentedControl values={['Segment1', 'Segment2']} disabled />

          <p className="sub-title">SelectedIndex</p>
          <SegmentedControl selectedIndex={1} values={['Segment1', 'Segment2', 'Segment3']} />

          <p className="sub-title">TintColor</p>
          <SegmentedControl
            values={['Segment1', 'Segment2', 'Segment3']}
            tintColor={'#ff0000'}
            style={{ height: '40px', width: '250px' }}
          />

          <p className="sub-title">onChange/onValueChange</p>
          <SegmentedControl
            values={['Segment1', 'Segment2', 'Segment3']}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
        </WingBlank>
      </div>
    )
  }
}


export default App
