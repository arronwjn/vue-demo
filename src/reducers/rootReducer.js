import {combineReducers} from 'redux'
import HomeText from './home/HomeReducer'
import IndexContent from './home/IndexReducer'
import FindReducer from './findindex/FindReducer'

const rootReducer = combineReducers({
  HomeText,
  IndexContent,
  FindReducer
})


export default rootReducer;
