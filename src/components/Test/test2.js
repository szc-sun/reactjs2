import React from 'react'
import ListCom from './listCom'
import FormCom from './formCom'

class Test2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: '001',
			message: ''
		}
	}

	changeFormCom() {
		this.setState({
			id: '002'
		})
	}

	handleReceiveMessage(msg) {
		console.log('test2', msg)
		this.setState({
			message: msg
		})
	}

	render() {
		const { id, message } = this.state
		return (
			<div className="container">
				<h1>标题</h1>
				<hr />
				<div>
					<ListCom message={message} />
				</div>
				<FormCom
					id={id}
					onReceiveMessage={(msg)=>{ this.handleReceiveMessage(msg) }}
				/>
				<button
					type="button"
					onClick={this.changeFormCom.bind(this)}
				>
changeProps
				</button>
			</div>
		)
	}
}
export default Test2
