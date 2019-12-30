import React from 'react'
import Button from './ButtonCom'

class itemCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		console.log(123, this.props)
		const { myData } = this.props
		return (
			<li>
				<div>
					<img
						src={myData.img}
						alt=""
					/>
				</div>
				<div>
					<p>{myData.name}</p>
					<p>{myData.title}</p>
				</div>
				<Button text="reply" />
			</li>
		)
	}
}
export default itemCom