import {
	connect
} from 'react-redux'
import {
	toggleProbe
} from '../actions'
import ProbeList from '../components/ProbeList'

const getVisibleProbes = (probes, filter) => {
	switch (filter) {
	case 'SHOW_ALL':
		return probes
	case 'SHOW_COMPLETED':
		return probes.filter(t => t.completed)
	case 'SHOW_ACTIVE':
		return probes.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		probes: getVisibleProbes(state.probes, state.visibilityFilter),
		loading: state.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onProbeClick: (id) => {
			dispatch(toggleProbe(id))
		}
	}
}

const VisibleProbeList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProbeList)

export default VisibleProbeList
