// import types from '../.././constants/actionType'

// const initialState={
//   addList:[]
// }

function HomeReducer(state=[],action){
    switch(action.type) {
      case 'HMOE-INDEXROUTE':
        console.log('reducer')
        return action.homeList
      default:
        return state
    }
  }

export default HomeReducer;
