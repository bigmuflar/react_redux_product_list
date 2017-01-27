import React from 'react'
import { connect } from 'react-redux'
import { addProbe } from '../actions'

let AddProbe = ({ dispatch }) => {
  let input

  return (
    <div className="addProbe">
      <div className="row">
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addProbe(input.value))
          input.value = ''
        }}>
        <div className="input-group">
            <input className="form-control" placeholder="Probe Name" ref={node => {
              input = node
            }} />
            <span className="input-group-btn">
              <button className="btn btn-info" type="submit">
                Add Probe
              </button>
            </span>
          </div>
        </form>
      </div>
      <i>Double click to mark complete.</i>
    </div>
  )
}
AddProbe = connect()(AddProbe)

export default AddProbe
