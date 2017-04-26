import axios from 'axios'
import store from '../store/store'

export function HomeList(homeList){
  return dispatch=>{
    console.log('dispatch');
    dispatch({type:'HMOE-INDEXROUTE',homeList})
  }
}
