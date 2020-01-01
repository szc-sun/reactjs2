import React from 'react'
import {
	// BrowserRouter as Router,
	HashRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = () => <div>home</div>
// const List = () => <div>list</div>
const Page404 = () => <div>not found</div>
class Detail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { match } = this.props
		return (
			<div>
                detail
				{match.url}
			</div>
		)
	}
}
class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	gotoDetail() {
		const { history } = this.props
		history.push('/list/4')
	}

	render() {
		console.log(this.props)
		const { match } = this.props
		return (
			<div>
				<Link to={`${match.path}/0`}>item1</Link>
				<Link to={`${match.path}/1`}>item2</Link>
				<Link to={`${match.path}/2`}>item3</Link>
				<button
					type="button"
					onClick={()=>{ this.gotoDetail() }}
				>
gotoDetail
				</button>
				<Route
				    path={`${match.path}/:id`}
				    component={Detail}
				>
				</Route>
			</div>

		)
	}
}

class Layout extends React.Component {
	render() {
		return (
			<div>
				<div>
					{/* <a href="#/">home</a>
					<a href="#/list">list</a> */}
					<Link to="/">home</Link>
&emsp;
					<Link to="/list/8">list</Link>
					<br />

					<NavLink
						to="/"
						exact
						activeClassName="active"
					>
                        home
					</NavLink>
&emsp;
					<NavLink
						to="/list"
						activeClassName="active"
					>
                        list
					</NavLink>
&emsp;
					<NavLink
						to="/list2"
						activeClassName="active"
					>
                        list2
					</NavLink>
				</div>
				<Switch>
					<Route
						path="/"
						exact
						component={Home}
					>
					</Route>
					<Route
						path="/list"
						component={List}
					>
					</Route>
					<Route
						path="/page404"
						component={Page404}
					>
					</Route>
					<Redirect to="/"></Redirect>
				</Switch>
			</div>
		)
	}
}
class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout />
			</Router>
		)
	}
}

export default App