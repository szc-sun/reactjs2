import React from 'react'
import Button from './ButtonCom'

class itemCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<li>
				<div>
					<img
						src="http://placehold.it/50x50"
						alt=""
					/>
				</div>
				<div>
					<p>Nate</p>
					<p>This is great Article</p>
				</div>
				<Button text="reply" />
			</li>
		)
	}
}
export default itemCom