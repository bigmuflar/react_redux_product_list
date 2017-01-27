let nextProbeId = 0
export const addProbe = (text) => {
  return {
    type: 'ADD_PROBE',
    id: nextProbeId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleProbe = (id) => {
  return {
    type: 'TOGGLE_PROBE',
    id
  }
}
