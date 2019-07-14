import React, { Component } from 'react'
import { getAds } from '../actions/ads'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SingleItem from './SingleItem'
// import './Adds.css'

class Ads extends Component {

  componentDidMount() {
    this.props.getAds()
  }

  render() {
    console.log('ADS ARE', this.props.ads)
    if (!this.props.ads.length) { return <h3>loading...</h3> }
    return (
      <div>
        <h3>Welcome to my store</h3>
        <Link to="/newad">List a new Item</Link>
        <div className="container">
          {this.props.ads.map(ad => {
            return <Link
              key={ad.id}
              to={`/singleitem/${ad.id}`}
            >
              <SingleItem
                id={ad.id}
                title={ad.title}
                picture={ad.picture}
                price={ad.price}
              />
            </Link>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ads
  }
}

export default connect(mapStateToProps, { getAds })(Ads)