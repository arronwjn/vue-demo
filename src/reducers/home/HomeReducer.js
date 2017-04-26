import types from '../.././constants/actionTypes'


const initialState={
  addList:[],
}

function HomeReducer(state=initialState.addList,action){
    switch(action.type){
      case types.home.HMOE_INDEXROUTE:
        console.log('reducer')
        return action.homeList
      default:
        return state
    }
  }

export default HomeReducer;
