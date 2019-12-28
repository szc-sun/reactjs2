import React from 'react'
import ReactDOM from 'react-dom'

import './styles/app.scss'

// import Home, { Mine, Search } from './components/Home'
import * as AAA from './components/Home'
import Timer from './components/Test/test1'
import Test2 from './components/Test/test2'

console.log(Timer)

console.log('hello~')

ReactDOM.render(
	<div>
		{/* <Home />
		<Search />
		<Mine /> */}
		<Test2 id="test2" />
		<Timer.Timer1 title="Timer1" />
		<Timer.Timer2 title="Timer2" />
		<AAA.default test="aaa" />
		<AAA.default />
		<AAA.Search />
		<AAA.Mine />
	</div>,
	document.getElementById('app')
)
