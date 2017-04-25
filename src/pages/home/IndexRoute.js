import React from 'react'
import axios from 'axios'


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
      console.log(res)
      console.log(res.data.data)
      this.setState({data:res.data.data})
    })
  }
  render(){
    return(
      <div className='HomePage'>
        {this.state.data.map((item,index)=>
          <li key={index}>
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

export default Index;
