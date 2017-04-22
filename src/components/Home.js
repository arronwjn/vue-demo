import React from 'react'
import style from '../style/home/home.css'
import Header from './Header'
import Footer from './Footer'


class Home extends React.Component{
  render(){
    return(

      <div className={style.mywarp}>
        <Header/>
        <div className={style.mid}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
