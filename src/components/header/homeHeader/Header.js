import React from "react"
import style from '../../.././style/home/home.css'
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
      <div className={style.header}>
        home
        <SearchBar
        value={this.state.value}
        placeholder="搜索"
      />
      </div>
    )
  }
}

export default Header;
