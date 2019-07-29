
import React from 'react'
import { Tree } from 'antd'
import { columnsAll } from '../../columns'
import { observer } from 'mobx-react'
const { TreeNode } = Tree;


@observer
class TreeColumns extends React.Component {

  onCheck = checkedKeys => {
    console.log(checkedKeys)
    const {store} = this.props
    store.columnsChange(checkedKeys)
  };


  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });

  render() {
    const { isShow, store } = this.props
    console.log(store)
    return (
      <div className="qf-row-box" style={{ display: isShow ? 'block' : 'none' }}>
        <Tree
          defaultExpandAll
          checkable
          onCheck={this.onCheck}
          checkedKeys={store.checkedKeys}
        >
          {this.renderTreeNodes(columnsAll)}
        </Tree>
      </div>)
  }
}

export default TreeColumns
