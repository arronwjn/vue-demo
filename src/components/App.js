import React from 'react'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './Home'
import FindIndex from './FindIndex'
import Index from './IndexRoute'
import Notice from './Notice'
import PrivateLetter from './PrivateLetter'
import More from './More'


class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Index}/>
            <Route path='find' component={FindIndex}/>
            <Route path='notice' component={Notice}/>
            <Route path='letter' component={PrivateLetter}/>
            <Route path='more' component={More}/>
          </Route>
        </Router>
      </div>
    )
  }
}


export default App;
