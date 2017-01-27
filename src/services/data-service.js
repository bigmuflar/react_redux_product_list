import request from 'superagent'

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_PROBE_DATA':
		request
			.get('data/probe-data.json')
			.end((err, res) => {
				if (err) {
					return next({
						type: 'GET_PROBE_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text)
				next({
					type: 'GET_PROBE_DATA_RECEIVED',
					data
				})
			})
		break
	default:
		break
	}

};

export default dataService
