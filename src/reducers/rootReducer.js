import {combineReducers} from 'redux'
import HomeReducer from './home/HomeReducer'

const rootReducer = combineReducers({
  HomeText:HomeReducer
})


export default rootReducer;
