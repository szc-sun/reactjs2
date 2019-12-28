import React from 'react'
import ListCom from './listCom'
import FormCom from './formCom'

class Test2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: '001'
		}
	}

	 changeFormCom() {
		this.setState({
			id: '002'
		})
	}

	render() {
		const { id } = this.state
		return (
			<div className="container">
				<h1>标题</h1>
				<hr />
				<div>
					<ListCom />
				</div>
				<FormCom id={id} />
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
