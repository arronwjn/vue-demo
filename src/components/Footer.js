import React from "react"
import style from '../style/home/home.css'
import {Link} from 'react-router'
import AlignLeft from 'react-icons/lib/fa/align-left'
import DashBoard from 'react-icons/lib/go/dashboard'
import Bars from 'react-icons/lib/fa/bars'
import Bell from 'react-icons/lib/ti/bell'
import Comment from 'react-icons/lib/go/comment'

class Footer extends React.Component{
  render(){
    return(
      <div className={style.footer}>
        <Link to='/'><AlignLeft/></Link>
        <Link to='find'><DashBoard/></Link>
        <Link to='notice'><Bell/></Link>
        <Link to='letter'><Comment/></Link>
        <Link to='more'><Bars/></Link>
      </div>
    )
  }
}

export default Footer;
