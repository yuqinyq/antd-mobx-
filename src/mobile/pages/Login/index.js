/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 10:39:54
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 16:00:00
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Toast } from 'antd-mobile'
import './index.less'


@withRouter @inject('loginStore') @observer
class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.username === 'admin' && values.password === '123456') {
          const data = JSON.stringify(values);
          this.props.loginStore.toggleLogin(true, data)
          Toast.success('登录成功')
          this.props.history.replace("home");
        } else {
          Toast.fail('用户名或密码错误')
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="qf-mobile-login">
        <h1 className="login-title">用户登录</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请填写您的用户名!' }],
              initialValue:'admin'
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
                defaultValue='admin'
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请填写您的密码！' }],
              initialValue:'123456'
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
                defaultValue='123456'
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            {/* <a className="login-form-forgot" href="">
              忘记密码
            </a> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Form.create()(Login)
