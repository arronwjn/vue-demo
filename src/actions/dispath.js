import axios from 'axios'
import store from '../store/store.js'
import types from '../constants/actionTypes.js'

export function HomeList(){
  return dispatch=>{
    console.log('dispatch');
    axios.get('https://cnodejs.org/api/v1/topics')
    .then(res=>{
      dispatch({type:types.home.HMOE_INDEXROUTE,homeList:res.data.data})
    })

  }
}
