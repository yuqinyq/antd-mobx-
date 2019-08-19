/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-19 11:45:07
 */
import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import NavBarHeader from '../../../components/NavBarHeader'
import './index.less'

const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge> },
  { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> },
];

const tabs2 = [
  { title: 'First Tab', sub: '1' },
  { title: 'Second Tab', sub: '2' },
  { title: 'Third Tab', sub: '3' },
];

class App extends Component {

  render() {
    return (
      <div>
        <NavBarHeader title="标签页" cb={() => {
          this.props.history.replace("navPage");
        }} />
        <div>
          <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of first tab
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of second tab
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of third tab
      </div>
          </Tabs>
          <WhiteSpace />
          <Tabs tabs={tabs2}
            initialPage={1}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of first tab
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of second tab
      </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of third tab
      </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}


export default App
