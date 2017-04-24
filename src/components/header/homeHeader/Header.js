import React from "react"
// import  '../../.././style/home/home.css'
import { SearchBar} from 'antd-mobile';
import Bolt from 'react-icons/lib/fa/bolt'

class Header extends React.Component{
  render(){
    return(
      <div className='header'>
        <SearchBar
        placeholder="搜索"
        />
        <a href='#'><Bolt/></a>  
      </div>
    )
  }
}

export default Header;
