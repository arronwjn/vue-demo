import {combineReducers} from 'redux'
import HomeText from './home/HomeReducer'
import FindReducer from './findindex/FindReducer'

const rootReducer = combineReducers({
  HomeText,
  FindReducer
})


export default rootReducer;
