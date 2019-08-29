/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-19 11:22:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 15:59:38
 */
import React from 'react'
import { calculateWidth } from '../../../utils/utils'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import { Form, Input, notification } from 'antd'
import PromptBox from '../../../components/PromptBox'


@withRouter @inject('loginStore') @observer @Form.create()
class LoginForm extends React.Component {
  state = {
    focusItem: -1,   //保存当前聚焦的input
  }

  componentDidMount() {

  }
  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.username === 'admin' && values.password === '123456') {
          const data = JSON.stringify(values);
          this.props.loginStore.toggleLogin(true, data)
          notification.success({ message: '提示', description: '登录成功' })
          this.props.history.replace("home");
        } else {
          notification.error({ message: '提示', description: '用户名或密码错误' })
        }
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form
    const { focusItem } = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>用户登录</h3>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item help={getFieldError('username') &&
            <PromptBox info={getFieldError('username')} width={calculateWidth(getFieldError('username'))} />}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
              initialValue: 'admin'
            })(
              <Input
                onFocus={() => this.setState({ focusItem: 0 })}
                onBlur={() => this.setState({ focusItem: -1 })}
                maxLength={16}
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}} />} />
            )}
          </Form.Item>
          <Form.Item help={getFieldError('password') &&
            <PromptBox info={getFieldError('password')} width={calculateWidth(getFieldError('password'))} />}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }], initialValue: '123456'
            })(
              <Input
                onFocus={() => this.setState({ focusItem: 1 })}
                onBlur={() => this.setState({ focusItem: -1 })}
                type='password'
                maxLength={16}
                placeholder='密码'
                value='123456'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}} />} />
            )}
          </Form.Item>

          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录' />
          </div>
        </Form>
      </div>
    )
  }
}

const styles = {
  focus: {
    width: '20px',
    opacity: 1
  },
}

export default LoginForm
