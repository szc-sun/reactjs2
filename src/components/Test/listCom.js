import React from 'react'
import ItemCom from './itemCom'

class listCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comlist: [
				<ItemCom key="1" />,
				<ItemCom key="2" />,
				<ItemCom key="3" />
			]
		}
	}

	// 生命周期，dom实例化之后
	componentDidMount() {
		const { comlist } = this.state
		comlist.push(<ItemCom key="4" />)
		this.setState((prevState)=>({
			comlist: prevState.comlist
		}))
	}

	render() {
		const state = { ...this.state }
		return (
			<ul className="list">
				{
					state.comlist
				}
			</ul>
		)
	}
}
export default listCom
