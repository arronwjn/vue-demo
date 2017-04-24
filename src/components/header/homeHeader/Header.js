import React from "react"
// import  '../../.././style/home/home.css'
import { SearchBar} from 'antd-mobile';


class Header extends React.Component{
  constructor(){
    super()
    this.state = {
     value: '美食',
     focused: false
   }
  }

  render(){
    return(
      <div className='header'>
        <SearchBar
        value={this.state.value}
        placeholder="搜索"
      />
      </div>
    )
  }
}

export default Header;
