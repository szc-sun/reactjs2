/**
 * presitational components UI组件
 * container components 容器组件
 */

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PostList from './PostList'

// 传属性
const mapStateToProps = (state)=>({
	entities: state.posts
})
// 调dispatch
const mapDispatchToProps = (dispatch)=>{
	console.log(dispatch)
	return {
		onClickDeleteButton: (id)=>{
			dispatch(
				{
					type: 'DELETE_POST',
					id
				}
			)
		}
	}
}
// (state,dispatch)
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostList)

// class Posts extends Component {
// 	constructor(props, context) {
//   	super(props)
//   	this.state = {}
//   	// console.log(context)
//   	this.store = context.store
//   	this.store.subscribe(()=>this.forceUpdate())
//   	this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
// 	}

// 	componentDidMount() {
//   	this.store.dispatch({
//   		type: 'ADD_POST',
//   		payload: { id: '001', title: '321' }
//   	})
//   	this.store.dispatch({
//   		type: 'ADD_POST',
//   		payload: { id: '002', title: '666' }
//   	})
//   	console.log(this.store.getState())
// 	}

// 	onClickDeleteButton(id) {
//   	console.log(id)
//   	this.store.dispatch({
//   		type: 'DELETE_POST',
//   		id
//   	})
// 	}

// 	render() {
// 		return (
// 			<PostList
// 				entities={this.store.getState().posts}
// 				onClickDeleteButton={this.onClickDeleteButton}
// 			>
// 			</PostList>
// 		)
// 	}
// }
// Posts.contextTypes = {
// 	store: PropTypes.object
// }
export default Posts