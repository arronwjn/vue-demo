import React from 'react'
import axios from 'axios'


class Text extends React.Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    axios.get('https://cnodejs.org/api/v1/topics',{mdrender:true})
    .then(res=>{
      this.setState({data:res.data.data})
    })
  }
  render(){
    return(
      <div className='text'>
        {this.state.data.map((item,index)=>
          <div key={index} dangerouslySetInnerHTML={{__html: <div></div>}} />
        )}
      </div>
    )
  }
}

export default Text;
