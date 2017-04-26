import types from '../.././constants/actionTypes'


function IndexReducer(state='',action){

  switch (action.type) {
    case types.home.INDEX_CONTENT:
      console.log('indexReducer')
      return action.indexContent
    default:
      return state
  }
}

export default IndexReducer;
