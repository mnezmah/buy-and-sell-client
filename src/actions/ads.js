import * as request from 'superagent'

export const SET_ADS =
  'SET_ADS'

export const CREATE_AD = 'CREATE_AD'

function setAds(ads) {
  return {
    type: SET_ADS,
    payload: ads
  }
}

export function getAds() {
  return function (dispatch) {
    request('http://localhost:4200/ads')
      .then(res => {
        console.log('RESPONSE', res.body)
        dispatch(setAds(res.body))
      }).catch(console.error)
  }
}

function adCreated(ad) {
  return {
    type: CREATE_AD,
    ad
  }
}

export const createAd = (title, description) => (dispatch) => {
  const ad = {
    title: title,
    description: description
  }
  request
    .post('http://localhost:4200/ads', ad)
    .send(ad)
    .then(res => {
      dispatch(adCreated(ad))
    })
    .catch(console.error)
}