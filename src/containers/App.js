import React from 'react'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from '../pages/home/Home'
import FindIndex from '../pages/findindex/FindIndex'
import Index from '../pages/home/IndexRoute'
import Notice from '../pages/notice/Notice'
import PrivateLetter from '../pages/privateletter/PrivateLetter'
import More from '../pages/more/More'


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
