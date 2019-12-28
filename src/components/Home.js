import React from 'react'

class Home extends React.Component {
	render() {
		console.log(this)
		return (
			<div>
				{4 < 5 ? 'yes' : 'no'}
			</div>
		)
	}
}

class Search extends React.Component {
	render() {
		return <div> Search </div>
	}
}
class Mine extends React.Component {
	render() {
		return <div> Mine </div>
	}
}
export {
	Mine,
	Search
}
export default Home
