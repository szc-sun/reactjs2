import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { createStore, combineReducers } from 'redux'
class MovieList extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { movies } = this.props
		return (
			<ul>
				{
					movies.map((item)=>(
						<li key={item.id}>{item.title}</li>
					))
				}

			</ul>
		)
	}
}
MovieList.propTypes = {
	movies: PropTypes.array.isRequired
}
export default MovieList
