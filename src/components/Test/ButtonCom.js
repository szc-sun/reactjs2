import React from 'react'

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { text } = this.props
		return (
			<button type="button">{text}</button>
		)
	}
}
export default Button
