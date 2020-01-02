import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/app.scss'

// import Home, { Mine, Search } from './components/Home'
// import * as AAA from './components/Home'
// import Timer from './components/Test/test1'
// import Test2 from './components/Test/test2'

// import App from './components/router/basic'
// import App from './components/redux/middleware/App'

import { createStore } from 'redux'
import App from './components/redux/react-redux/components/App'
import postsRuducers from './components/redux/react-redux/reducers'

const store = createStore(postsRuducers)
// console.log(store)

const el = document.getElementById('app')
ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	el
)
  	store.dispatch({
  		type: 'ADD_POST',
  		payload: { id: '001', title: '321' }
  	})
  	store.dispatch({
  		type: 'ADD_POST',
  		payload: { id: '002', title: '666' }
  	})
