import React from 'react'
import ItemCom from './itemCom'

const dataSource = [
	{
		name: 'Nate',
		title: 'this is great Article'
	},
	{
		name: 'Tom',
		title: 'this is a cat'
	}
]

class listCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comlist: dataSource.map((item, index)=>(
				// key不得已，才能用index
				<ItemCom
					myData={item}
					key={index}
				/>
			))
			// [
			// 	<ItemCom key="1" />,
			// 	<ItemCom key="2" />,
			// 	<ItemCom key="3" />
			// ]
		}
	}

	// 生命周期，dom实例化之后
	componentDidMount() {
		var add = {
			name: 'Nate3',
			title: 'this is great Article'
		}
		const { comlist } = this.state
		comlist.push(<ItemCom
			myData={add}
			key="3"
		/>)
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
