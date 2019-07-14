import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAds } from '../actions/ads'
import SingleItem from './SingleItem'
import './SingleItemContainer.css'

class SingleItemContainer extends Component {
  componentDidMount() {
    this.props.getAds()
  }

  render() {
    console.log("props test:", this.props)
    const { ads } = this.props
    console.log("adds test:", ads)
    const ad = ads.find(ad => {
      return ad.id == this.props.match.params.id
    })
    console.log("ad test:", ad)
    console.log("container log")

    return (
      ad
        ?
        <div className='container'> 
          <SingleItem
            key={ad.id}
            picture={ad.picture}
            title={ad.title}
            price={ad.price}
          />
        </div>
        : "Loading..."
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ads
  }
}

export default connect(mapStateToProps, { getAds })(SingleItemContainer)