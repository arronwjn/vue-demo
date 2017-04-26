import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/containers/App.js'
import './src/style/home/home.css'
import {Provider} from 'react-redux'
import store from './src/store/store.js'
// import 'antd/dist/antd.css';


ReactDOM.render(
  <Provider store={store}><App/></Provider>,document.getElementById('app')
)
