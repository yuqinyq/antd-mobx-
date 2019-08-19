import React from 'react'
import { Drawer, Button, Form, Input, Select, notification, } from 'antd';
import { HotTable } from '@handsontable/react';

const { Option } = Select

class EditDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.data = [
      ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
      ['2019', 10, 11, 12, 13],
      ['2020', 20, 11, 14, 13],
      ['2021', 30, 15, 12, 13]
    ];
  }

  render() {
    const { data, isEidt } = this.props

    return (
      <Drawer
        title={data.name}
        width={600}
        onClose={this.props.onClose}
        visible={isEidt}
      >
        <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="500" height="300" />
        <Form.Item label="药品名" required>
          <Input style={{ width: '256px' }} defaultValue={data.name} />
        </Form.Item>
        <Form.Item label="类型" required>
          <Select placeholder="请选择" defaultValue={data.type}>
            <Option value="中成药">中成药</Option>
            <Option value="中药">中药</Option>
            <Option value="西药">西药</Option>
          </Select>
        </Form.Item>
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
          }}
        >
          <Button onClick={this.props.onClose} style={{ marginRight: 8 }}>
            取消
        </Button>
          <Button onClick={()=>{
               notification.success({ message: '提示', description: '修改成功' })
               this.props.onSubmit()}} type="primary">
            确认
        </Button>
        </div>
      </Drawer>
    )
  }
}
export default EditDrawer
