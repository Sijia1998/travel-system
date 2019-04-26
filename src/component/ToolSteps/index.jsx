import React, { Component } from 'react'
import { Steps } from 'antd';
import styles from './style.less';
const Step = Steps.Step;

class ToolBar extends Component {
  render() {
    return (
      <div className={styles['steps-wrapper']}>
        <Steps current={0}>
          <Step title="添加信息" description="Add information." />
          <Step title="提交成功" description="Success." />
        </Steps>
      </div>)
  }
}

export default ToolBar