import React, { Component } from 'react'
import LoginForm from '@/component/Login'
import RegisterForm from '@/component/Register'
import styles from './style.less'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Login extends Component {
  state = {
    tabs: '1'
  }
  changeTab = key => {
    console.log(key);
    this.setState({
      tabs: key
    })
  }
  callback = key => {
    this.setState({
      tabs: key
    })
  }
  render() {
    const { tabs } = this.state
    return (
      <div className={styles['login-wrapper']}>
        <div className="header-title">旅游租赁系统</div>
        <Tabs activeKey={tabs} onChange={this.callback} tabBarStyle={{ border: 'none', textAlign: 'center' }}>
          <TabPane tab="登录" key="1">
            <LoginForm className="login-form"></LoginForm>
          </TabPane>
          <TabPane tab="注册" key="2">
            <RegisterForm className="login-form" changeTab={this.changeTab}></RegisterForm>
          </TabPane>
        </Tabs>,


        <footer className="footer">Copyright@2019 JihangGuo毕业设计</footer>
      </div>
    )
  }
}

export default Login
