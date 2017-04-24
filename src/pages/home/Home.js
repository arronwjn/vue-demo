import React from 'react'
// import '../.././style/home/home.css'   /*css moudle引用*/
import HomeHeader from '../.././components/header/homeHeader/Header'
import FindHeader from '../.././components/header/findHeader/Header'
import Footer from '../.././components/Footer'


class Home extends React.Component{
  componentDidMount(){
    // 1)获取元素
    // var topNav = document.getElementById("topNav");
    // 2)当滚动到指定位置是给#topNav添加fixed类
    // 绑定滚动事件 (gunlun/拖动滚动条)时执行函数中的代码
    window.onscroll = ()=>{
    console.log('1111');

    // 获取滚动条滚动过的距离
    // var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    var scrollTop = document.addEventListener("scroll", function(){
      console.log('111')
    });
    console.log(scrollTop)
    // 当滚动到<指定位置>时给#topNav添加fixed类
    if(scrollTop >10){
    //给元素添加类:ele.className = 'xx';
    // topNav.className = 'fixed';
    // this.handleScroll()
    console.log('111')
    }

  }

}
  render(){
    return(
      <div className='mywarp' ref="userOrder">
        {this.props.router.isActive('/',true)?<HomeHeader/>:<FindHeader/>}
        <div className='mid' id='topNav'>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
