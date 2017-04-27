import React from 'react'
import {connect} from 'react-redux'
import store from '../.././store/store.js'


class Text extends React.Component{

  render(){

    return(
      <div className='text'>
        <h3>{this.props.data.title}</h3>
        <div dangerouslySetInnerHTML={{__html: this.props.data.content}} />
      </div>
    )
  }
}

let mapStateToProps= (state)=>({
  data:state.IndexContent
})
export default connect(mapStateToProps)(Text);
