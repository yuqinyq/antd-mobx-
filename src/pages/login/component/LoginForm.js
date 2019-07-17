/**
 * @Description: 用户名密码登录
 */
import React, { Component } from "react";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'
const FormItem = Form.Item;

class LoginFormComponent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.userName === "admin" && values.password === "123456" && values.checkCode === '1024') {
          const data = JSON.stringify(values);
          notification.success({
            message: '提示',
            description: '登录成功'
          })
          localStorage.setItem("qfLoginInfo", data);
          this.props.history.replace("table/antd");
        } else if (values.checkCode !== '1024') {
          notification.error({
            message: '提示',
            description: "验证码错误"
          })
          return;
        } else {
          notification.error({
            message: '提示',
            description: "账号或密码错误"
          })
          return;
        }
      }
    });
  };

  async componentDidMount() { }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="qf-login-component-box">
        <div>
          <span>用户登录</span>
        </div>
        <Form onSubmit={this.handleSubmit} className="qf-login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(<Input placeholder="账号" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(<Input placeholder="输入密码" type="password" />)}
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('checkCode', {
                rules: [{ required: true, message: '请输入验证码!' }]
              })(
                <div className='common-checkcode-box'>
                  <Input placeholder='输入验证码' />
                  <img src='https://s1.ax1x.com/2018/06/05/C7UhrD.jpg' alt='验证码' />
                </div>
              )
            }
          </FormItem>
          <FormItem>
            <div className="loginNew-forgot-box">
              {getFieldDecorator("rememberMe", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox style={{ fontSize: "13px" }}>记住我</Checkbox>)}
              <Link className="loginNew-forgot" to="/forget">
                忘记密码?
              </Link>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="qf-login-form-button"
            >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const LoginForm = withRouter(Form.create()(LoginFormComponent));
