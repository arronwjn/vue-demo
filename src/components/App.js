import React from 'react'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './Home'
import Index from './IndexRoute'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Index}/>
          </Route>
        </Router>
      </div>
    )
  }
}


export default App;
