import React from 'react'
import ReactDOM from 'react-dom'
import Button from './ButtonCom'

class formCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			test: 'aaa',
			textareaVal: ''
		}
		// this.changeState = this.changeState.bind(this)
		console.log('constructor')
	}

	// 过时的生命周期方法
	UNSAFE_componentWillMount() {
		console.log('UNSAFE_componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount', this.test)
		// setInterval(() => {
		// 	console.log('componentDidMount', this.test.value)
		//  }, 3000)
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

	changeTextarea(e) {
		this.setState({
			textareaVal: e.target.value
		})
	}

	handleSubmit(val) {
		const { textareaVal } = this.state
		const { onReceiveMessage } = this.props
		console.log(textareaVal, val)
		onReceiveMessage(textareaVal)
	}

	render() {
		const { id } = this.props
		const { test, textareaVal } = this.state
		console.log('render')
		return (
			<div className="form">
				<div>受控组件</div>
				<textarea
					name="textareaVal"
					id="textareaVal"
					cols="160"
					rows="10"
					value={textareaVal}
					onChange={this.changeTextarea.bind(this)}
				>
				</textarea>
				<div>{textareaVal}</div>
				<br />
				<div>非受控组件</div>
				<textarea
					name="textareaVal2"
					id="textareaVal2"
					cols="160"
					rows="10"
					ref={(m) => { this.test = m }}
				>
				</textarea>
				{/* <div>{this.refs.test.value}</div> */}
				<br />
				<Button
					text="send"
					type="submit"
					onButtonClick={(val)=>{ this.handleSubmit(val) }}
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
					onClick={()=>{ this.changeState('abc') }}
					// onClick={this.changeState.bind(this, 'abc')}
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
