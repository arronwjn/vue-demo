import axios from 'axios'
import store from '../store/store.js'
import types from '../constants/actionTypes.js'
import {hashHistory} from 'react-router'

export function HomeList(){
  return dispatch=>{
    console.log('dispatch');
    axios.get('https://cnodejs.org/api/v1/topics')
    .then(res=>{
      dispatch({type:types.home.HMOE_INDEXROUTE,homeList:res.data.data})
    })

  }
}

export function IndexContent(id){
  return dispatch=>{
    console.log('indexContent');
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
    .then(res=>{
      dispatch({type:types.home.INDEX_CONTENT,indexContent:res.data.data.content})
      hashHistory.push('/text')
    })
  }
}
