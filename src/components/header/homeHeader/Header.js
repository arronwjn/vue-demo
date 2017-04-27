import React from "react"
// import  '../../.././style/home/home.css'
import {SearchBar} from 'antd-mobile';
import Bolt from 'react-icons/lib/fa/bolt'
import {Link} from 'react-router'

class Header extends React.Component{
  constructor(){
    super()
    this.state={
      TwoLevelNav:false
    }
  }
  handleClick(){
    this.setState({TwoLevelNav:!this.state.TwoLevelNav})
  }
  render(){
    return(
      <div className='header'>
        <SearchBar
        placeholder="搜索"
        />
        <a href='#' onClick={this.handleClick.bind(this)}><Bolt/></a>
        {this.state.TwoLevelNav?
          <div className='HeaderNav'>
            <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='find'>发现</Link></li>
              <li><Link to='notice'>收藏</Link></li>
              <li><Link to='letter'>消息</Link></li>
              <li><Link to='more'>个人中心</Link></li>
            </ul>
          </div>:
          <div></div>
        }
      </div>
    )
  }
}

export default Header;
