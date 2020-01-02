import React, { Component } from 'react'
import { createStore } from 'redux'
import Counter from './Counter'
import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		store.subscribe(()=>{
			// this.setState({})
			this.forceUpdate()
		})
	}

	render() {
		return (
			<div>
				<Counter
					count={store.getState()}
					onIncrement={()=>{ store.dispatch({ type: 'INCREMENT' }) }}
					onDecrement={()=>{ store.dispatch({ type: 'DECREMENT' }) }}
				>
				</Counter>
			</div>
		)
	}
}
export default App
