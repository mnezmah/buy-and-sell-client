import { CREATE_AD } from '../actions/ads'

const initialState = {}

const ad = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_AD:
      return {
        ...action.ad
      }
    default:
      return state
  }
}

export default ad