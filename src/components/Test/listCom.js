import React from 'react'
import axios from 'axios'
import ItemCom from './itemCom'

const dataSource = [
	{
		id: '001',
		name: 'Nate',
		title: 'this is great Article',
		img: 'http://placehold.it/50x50'
	},
	{
		id: '002',
		name: 'Tom',
		title: 'this is a cat',
		img: 'http://placehold.it/50x50'
	}
]

class listCom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comlist: dataSource.map((item)=>(
				// key不得已，才能用index
				<ItemCom
					myData={item}
					key={item.id}
				/>
			))
			// [
			// 	<ItemCom key="1" />,
			// 	<ItemCom key="2" />,
			// 	<ItemCom key="3" />
			// ]
		}
	}

	// UNSAFE_componentWillMount() {
	// 	var comlist
	// 	this.loadData()
	// 		.then(res=>{
	// 			comlist = res.data.subjects.map((item) =>(
	// 				<ItemCom
	// 					myData={{
	// 						id: item.id,
	// 						name: item.title,
	// 						title: item.year,
	// 						img: item.images.small
	// 					}}
	// 					key={item.id}
	// 				/>
	// 			))
	// 			this.setState({
	// 				comlist
	// 			})
	// 			console.log(comlist, this.state)
	// 		})
	// }
	componentDidMount = async () => {
		var comlist
		var res = await this.loadData()
		comlist = res.data.subjects.map((item) =>(
			<ItemCom
				myData={{
					id: item.id,
					name: item.title,
					title: item.year,
					img: item.images.small
				}}
				key={item.id}
			/>
		))
		this.setState({
			comlist
		})
		console.log(comlist, this.state)
	}

	// 生命周期，dom实例化之后
	// componentDidMount() {
	// 	var add = {
	// 		id: '003',
	// 		name: 'Nate3',
	// 		title: 'this is great Article',
	// 		img: 'http://placehold.it/50x50'
	// 	}
	// 	const { comlist } = this.state
	// 	comlist.push(<ItemCom
	// 		myData={add}
	// 		key={add.id}
	// 	/>)
	// 	this.setState((prevState)=>({
	// 		comlist: prevState.comlist
	// 	}))
	// }

	// 监测props变化
	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		const { comlist } = this.state
		const item = {
			id: new Date().getTime(),
			name: 'add-msg',
			title: nextProps.message
		}
		comlist.push(
			<ItemCom
				myData={item}
				key={item.id}
			/>
		)
	}

	loadData() {
		return axios({
			url: '/api/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
		})
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
