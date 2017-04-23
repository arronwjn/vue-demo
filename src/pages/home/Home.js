import React from 'react'
import style from '../.././style/home/home.css'
import HomeHeader from '../.././components/header/homeHeader/Header'
import FindHeader from '../.././components/header/findHeader/Header'
import Footer from '../.././components/Footer'


class Home extends React.Component{

  render(){
    return(
      <div className={style.mywarp}>
        {this.props.router.isActive('/',true)?<HomeHeader/>:<FindHeader/>}
        <div className={style.mid}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
