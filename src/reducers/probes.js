const probe = (state, action) => {
	switch (action.type) {
	case 'ADD_PROBE':
		return {
			id: action.id,
			text: action.text,
			completed: false
		}
	case 'TOGGLE_PROBE':
		if (state.id !== action.id) {
			return state
		}

		return Object.assign({}, state, {
			completed: !state.completed
		})
	default:
		return state
	}
}

const probes = (state = [], action) => {
	switch (action.type) {
	case 'ADD_PROBE':
		return [
			...state,
			probe(undefined, Object.assign(action, {
				id: state.length
			}))
		]
	case 'TOGGLE_PROBE':
		return state.map(t =>
			probe(t, action)
		)
	case 'GET_PROBE_DATA_RECEIVED':
		return action.data
	default:
		return state
	}
}

export default probes
