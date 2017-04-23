import types from '../.././constants'

const initialState={
  addList:[],
}

function HomeReducer(state=initial,action){
    switch(action.type) {
      case 'Curriculum-All':
        console.log('reducer')
        return action.All
      default:
        return state
    }
  }

export default HomeReducer;
