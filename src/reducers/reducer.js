import { SET_ADDS } from '../actions/adds'

const initialState = []

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ADDS:
      return action.payload
    default:
      return state
  }
}