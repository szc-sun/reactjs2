import React from 'react'
import ReactDOM from 'react-dom'
import Button from './ButtonCom'

class formCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			test: 'aaa'
		}
		// this.changeState = this.changeState.bind(this)
		console.log('constructor')
	}

	// 过时的生命周期方法
	UNSAFE_componentWillMount() {
		console.log('UNSAFE_componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log('UNSAFE_componentWillReceiveProps', nextProps)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState)
		return true
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		console.log('UNSAFE_componentWillUpdate', nextProps, nextState)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState, snapshot)
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	changeState(str) {
		this.setState((prevState, prevProps)=>{
			console.log(str, prevState, prevProps)
			return ({
				test: str
			})
		})
	}

	unmountComponent() {
		console.log('unmountComponent')
		ReactDOM.unmountComponentAtNode(document.getElementById('app'))
	}

	render() {
		const { id } = this.props
		const { test } = this.state
		console.log('render')
		return (
			<div className="form">
				<textarea
					name=""
					id=""
					cols="160"
					rows="10"
				>
				</textarea>
				<br />
				<Button
					text="send"
				/>
				<div>
state：
					{test}
				</div>
				<div>
props：
					{id}
				</div>
				{/* <button type="submit">123</button> */}
				{/**
				 * ()=>{this.changeState() }
				 * this.unmountComponent.bind(this)
				 * this.changeState = this.changeState.bind(this)
				 * */}
				<button
					type="button"
					onClick={this.changeState.bind(this, 'abc')}
				>
changeState
				</button>
				<button
					type="button"
					onClick={this.unmountComponent.bind(this)}
				>
unmountComponent
				</button>
			</div>
		)
	}
}
export default formCom
