import React from 'react'
// 组件定义
/**
 * 方法一、函数定义
 * 方法二、es6 class定义
 */
function Timer1(props) {
	console.log(props)
	const { title } = props
	// const timer = setInterval(()=>(
	return (
		<div>
			{title}
		</div>
	)
	// ), 1000)
}
class Timer2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	// const timer = setInterval(()=>(
	render() {
		const { title } = this.props
		return (
			<div>
				{title}
			</div>
		)
	}
	// ), 1000)
}
export default {
	Timer1,
	Timer2
}