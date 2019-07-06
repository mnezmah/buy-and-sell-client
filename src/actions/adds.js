import * as request from 'superagent'

export const SET_ADDS =
  'SET_ADDS'

export function setAdds(adds) {
  return {
    type: SET_ADDS,
    payload: adds
  }
}

export function getAdds() {
  return function (dispatch) {
    request('http://localhost:4200/adds')
      .then(res => {
        console.log('RESPONSE',res.body)
        dispatch(setAdds(res.body))
      })
      .catch(console.error)
  }
}

