import React, { PropTypes } from 'react'
import Probe from './Probe'

const ProbeList = ({ probes, onProbeClick, loading }) => (
  <ul className="list">
		{loading ? 'Loading...': ''}
    {probes.map(probe =>
      <Probe
        key={probe.id}
        {...probe}
        onClick={() => onProbeClick(probe.id)}
      />
    )}
  </ul>
)

ProbeList.propTypes = {
  probes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onProbeClick: PropTypes.func.isRequired,
	loading: PropTypes.bool
}

export default ProbeList
