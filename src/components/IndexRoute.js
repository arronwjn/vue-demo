import React from 'react'
import Header from './Header'
import Footer from './Footer'
import style from '../style/home/home.css'

class Index extends React.Component{
  render(){
    return(
      <div className={style.mywarp}>
        <Header/>
        <div className={style.mid}>
          HomeIndex
          HomeIndex
          HomeIndex
          HomeIndex
          HomeIndex
          HomeIndex
          HomeIndex
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Index;
