import React from 'react'

class Main extends React.Component{
    render(){

      return <div className = 'main'>
      <a href = 'javascript:void(0)'>登录</a>
      <p>连接一个个小而确定的幸福</p>
      <input type = 'text' placeholder = '用户名' />
      <input type = 'password' placeholder = '密码' />
      <a href = 'javascript:void(0)' className = 'login'>登录</a>
      <span>没有账号?点击<a href = 'javascript:void(0)'>注册</a></span>
    </div>
    }
}
export default Main
