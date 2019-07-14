import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAds } from '../actions/ads'
import SingleItem from './SingleItem'
import './SingleItemContainer.css'

class SingleItemContainer extends Component {
  state = {
    singe: false
  }
  componentDidMount() {
    this.props.getAds()
  }

  onEdit = () => {
    this.setState({ single: !this.state.single })
  }

  render() {
    const { ads } = this.props
    const ad = ads.find(ad => {
      return ad.id == this.props.match.params.id
    })
    console.log('THIS.PROPS FROM SINGLE CONTAINER', this.props)
    console.log("container log")

    return (
      ad
        ?
        <div className='container'>
          <SingleItem
            key={ad.id}
            picture={ad.picture}
            title={ad.title}
            description={ad.description}
            price={ad.price}
            email={ad.email}
            phone={ad.phone}
            showEdit={this.onEdit}
            params={this.props.match.params}
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