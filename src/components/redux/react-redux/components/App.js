import React, { Component } from 'react'
import Posts from './Posts'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<h1>App</h1>
				<Posts></Posts>
			</div>
		)
	}
}
export default App