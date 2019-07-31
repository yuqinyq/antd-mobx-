/*
 * @Descripttion: 列选择组件，支持树形
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-31 09:30:18
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-31 11:02:05
 */



import React from 'react'
import { Tree, Button } from 'antd'
import { observer } from 'mobx-react'
import './index.less'
const { TreeNode } = Tree;


@observer
class TreeColumns extends React.Component {

  state = {
    rowShow: false,
  }

  onCheck = checkedKeys => {
    const { store } = this.props
    store.columnsChange(checkedKeys)
  };


  disableInfo = key => {
    const { store } = this.props
    if (store.disabledKeys.indexOf(key) > -1) {
      return true
    } else {
      return false
    }

  }

  renderTreeNodes = data => {
    const { store } = this.props
    return (
      data.map(item => {
        if (item.children) {
          return (
            <TreeNode title={item.title} key={item.key} dataRef={item}
            >
              {this.renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode {...item} disableCheckbox={store.disabledKeys.indexOf(item.key) !== -1}/>;
      })
    )

  }

  render() {
    const { store, columnsAll } = this.props
    const { rowShow } = this.state
    return (
      <div className="qf-row-btn"
        onMouseEnter={() => {
          this.setState({
            rowShow: true
          })
        }}
        onMouseLeave={() => {
          this.setState({
            rowShow: false
          })
        }}
      >
        <Button type="primary">列选择</Button>
        <div className="qf-row-box" style={{ display: rowShow ? 'block' : 'none' }}>
          <Tree
            defaultExpandAll
            checkable
            onCheck={this.onCheck}
            checkedKeys={store.checkedKeys}
          >
            {this.renderTreeNodes(columnsAll)}
          </Tree>
        </div>
      </div>
    )
  }
}

export default TreeColumns
