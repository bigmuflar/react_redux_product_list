import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import probeApp from './reducers'
import App from './components/App'
import dataService from './services/data-service'

let store = createStore(probeApp,{}, compose(applyMiddleware(dataService), window.devToolsExtension
	? window.devToolsExtension() : f => f))

render(
	<Provider store={store}>
	<App/>
</Provider>, document.getElementById('app-node'))

store.dispatch({type: 'GET_PROBE_DATA'})
