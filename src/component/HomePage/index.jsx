import React, { Component } from 'react'
import UserPage from './UserPage'
import AdminPage from './AdminPage'
import { connect } from 'react-redux'
import styles from './style.less'


class HomePage extends Component {
  render() {
    const { userInfo } = this.props;
    console.log(userInfo)
    return (
      <div className={styles['home-page-wrapper']}>
        <h2 style={{ textAlign: 'center' }}>个人主页</h2>
        {userInfo.userType === '1'? (
        <div className="userinfo-form">
          <UserPage></UserPage>
        </div>
        ):<AdminPage></AdminPage> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.login
  }
}



export default connect(mapStateToProps)(HomePage)