import React from 'react'

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleClick() {
		const { type, onButtonClick } = this.props
		if (type === 'submit') {
			onButtonClick('子组件传参')
		}
	}

	render() {
		const { text } = this.props

		return (
			<button
				type="button"
				onClick={this.handleClick.bind(this)}
			>
				{text}
			</button>
		)
	}
}
export default Button
