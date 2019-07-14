import { SET_ADS} from '../actions/ads'

const initialState = []

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ADS:
      return action.payload
    default:
      return state
  }
}