import React from 'react'
// import '../.././style/home/home.css'   /*css moudle引用*/
import HomeHeader from '../.././components/header/homeHeader/Header'
import FindHeader from '../.././components/header/findHeader/Header'
import Footer from '../.././components/Footer'


class Home extends React.Component{
  myFunction(){
    console.log('111')
  }
  render(){
    return(
      <div className='mywarp' ref="userOrder">
        {this.props.router.isActive('/',true)?<HomeHeader/>:<FindHeader/>}
        <div className='mid' id='topNav' onScroll={this.myFunction.bind(this)}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
