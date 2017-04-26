import React from 'react'
import axios from 'axios'
import {hashHistory} from 'react-router'
import {HomeList} from '../.././actions/dispath'
import {connect} from 'react-redux'
import store from '../.././store/store.js'


class Index extends React.Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    axios.get('https://cnodejs.org/api/v1/topics')
    .then(res=>{
      // console.log(res)
      // console.log(res.data.data)
      // this.setState({data:res.data.data})
      this.props.HomeList(res.data.data)
    })
  }
  handleClick(){
    hashHistory.push('/text')
  }
  render(){
    console.log(this.props.homelist)
    return(
      <div className='HomePage'>
        {this.state.data.map((item,index)=>
          <li key={index} onClick={this.handleClick.bind(this)}>
            <img src={item.author.avatar_url}/>
            <button>{item.tab}</button>
            <div>
              <span>{item.title}</span>
              <p>{item.reply_count}/{item.visit_count}</p>
            </div>
          </li>)}
      </div>
    )
  }
}


let mapStateToProps = (state)=>({
  homelist:state.HomeText.homeList
})
export default connect(mapStateToProps,{HomeList})(Index);
