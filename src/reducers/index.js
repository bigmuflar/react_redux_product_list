import {
	combineReducers
} from 'redux'
import probes from './probes'
import loading from './loading'
import visibilityFilter from './visibilityFilter'

const probeApp = combineReducers({
	loading,
	probes,
	visibilityFilter
})

export default probeApp
