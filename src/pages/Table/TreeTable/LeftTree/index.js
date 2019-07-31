import React from "react";
import { Card, Tree } from 'antd'

const { TreeNode } = Tree;

export default class TreeTable extends React.Component {


  renderTreeNodes = data => {
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
        return <TreeNode {...item} />;
      })
    )

  }
  render() {
    const { data, cb } = this.props
    return (
      <div className="qf-tree-left">
        <Card title="药品分类">
          {data.length > 0 ?
            <Tree
              defaultSelectedKeys={['0']}
              showLine
              defaultExpandAll
              onSelect={() => {
                cb()
              }}
            >
              {this.renderTreeNodes(data)}
            </Tree> : null}
        </Card>
      </div>
    )
  }
}
