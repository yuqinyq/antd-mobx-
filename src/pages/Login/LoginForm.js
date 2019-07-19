import React from 'react'
import { calculateWidth } from '../../utils/utils'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import { Form, Input } from 'antd'
import PromptBox from '../../components/PromptBox'


@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends React.Component {
  state = {
    focusItem: -1,   //保存当前聚焦的input
  }

  componentDidMount () {

  }
  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {

        axios.post('api/login', {
          name: values.username,
          password: values.password
        },{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.data.errorCode === 0) {
            localStorage.loginInfor = JSON.stringify({
              isLogin: true,
              infor: res.data.data
            })
            console.log(localStorage)
            // rudex 设置token
            this.props.appStore.toggleLogin(true, {username: values.username})


            const {from} = this.props.location.state || {from: {pathname: '/'}}
            this.props.history.push(from)

          }
        })
        if (false) {
          this.props.form.setFields({
            username: {
              value: values.username,
              errors: [new Error('用户名不存在')]
            }
          })
          return
        }

      }
    })
  }

  render () {
    const {getFieldDecorator, getFieldError} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>用户登录</h3>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item help={getFieldError('username') &&
          <PromptBox info={getFieldError('username')} width={calculateWidth(getFieldError('username'))}/>}>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item help={getFieldError('password') &&
          <PromptBox info={getFieldError('password')} width={calculateWidth(getFieldError('password'))}/>}>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>

          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录'/>
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
