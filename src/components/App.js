import React from 'react'
import Footer from './Footer'
import AddProbe from '../containers/AddProbe'
import VisibleProbeList from '../containers/VisibleProbeList'

const App = () => (
  <div>
    <AddProbe className="row" />
    <VisibleProbeList className="row" />
    <Footer className="row" />
  </div>
)

export default App
