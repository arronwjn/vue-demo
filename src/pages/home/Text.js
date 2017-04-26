import React from 'react'
import {connect} from 'react-redux'
import store from '../.././store/store.js'


class Text extends React.Component{

  render(){

    return(
      <div className='text'>
        <div dangerouslySetInnerHTML={{__html: this.props.content}} />
      </div>
    )
  }
}

let mapStateToProps= (state)=>({
  content:state.IndexContent
})
export default connect(mapStateToProps)(Text);
