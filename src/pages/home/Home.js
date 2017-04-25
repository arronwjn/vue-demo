import React from 'react'
// import '../.././style/home/home.css'   /*css moudle引用*/
import HomeHeader from '../.././components/header/homeHeader/Header'
import FindHeader from '../.././components/header/findHeader/Header'
import Footer from '../.././components/Footer'


class Home extends React.Component{
  constructor(){
    super()
    this.state={
      btn:true
    }
  }
  myFunction(e){
    // console.log(e)
    console.log(e.target.scrollTop)
    if(e.target.scrollTop>0){
      this.setState({btn:false})
    }else{
      this.setState({btn:true})
    }

  }
  render(){
    return(
      <div className='mywarp' ref="userOrder">
        {this.props.router.isActive('/',true)?<HomeHeader/>:<FindHeader/>}
        <div className='mid' id='topNav' onScroll={this.myFunction.bind(this)}>
          {this.props.children}
        </div>
        {this.state.btn?<Footer/>:<div></div>}
      </div>
    )
  }
}

export default Home;
