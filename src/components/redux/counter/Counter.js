import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { createStore, combineReducers } from 'redux'
class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { count, onIncrement, onDecrement } = this.props
		return (
			<div>
        被点击了
				{count}
        次
				<button
					type="button"
					onClick={onIncrement}
				>
          +
				</button>
				<button
					type="button"
					onClick={onDecrement}
				>
          -
				</button>
			</div>
		)
	}
}
Counter.propTypes = {
	count: PropTypes.number.isRequired
}
export default Counter
