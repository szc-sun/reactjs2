import { createStore /* combineReducers */ } from 'redux'

const initState = 0
const countReducer = (state = initState, action) =>{
	switch (action.type) {
	case 'INCREMENT':
		return state + action.payload
	default:
		return state
	}
}
const store = createStore(countReducer)
const log = ()=>{
	console.log(store.getState())
}
log()
store.subscribe(log)
store.dispatch({
	type: 'INCREMENT',
	payload: 3
})
// log()
store.dispatch({
	type: 'INCREMENT',
	payload: 2
})
// log()
export default ()=>null