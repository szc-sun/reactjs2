import React, { Component } from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import MovieList from './MovieList'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}


	componentDidMount() {
		store.subscribe(()=> this.forceUpdate())
		store.dispatch(this.showLoading())
		store.dispatch(this.fetchData())
	}

	showLoading() {
		return {
			type: 'LOADING'
		}
	}

	fetchData() {
		return (dispatch, getState)=>{
			fetch('/api/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10').then(response=>response.json()).then(res=>{
				console.log(res, getState())
				dispatch({
					type: 'GOT',
					payload: res.subjects
				})
			})
		}
	}

	render() {
		return (
			<div>
				<MovieList movies={store.getState()}>
				</MovieList>
			</div>
		)
	}
}
export default App
