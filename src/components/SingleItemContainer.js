import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdds } from '../actions/adds'
import SingleItem from './SingleItem'

class SingleItemContainer extends Component {
  componentDidMount() {
    this.props.getAdds()
  }

  render() {
    console.log("props test:", this.props)
    const { adds } = this.props
    console.log("adds test:", adds)
    const ad = adds.find(ad => {
      return ad.id == this.props.match.params.id
    })
    console.log("ad test:", ad)
    console.log("container log")

    return (
      ad
        ? <SingleItem
          key={ad.id}
          picture={ad.picture}
          title={ad.title}
          price={ad.price}
        />
        : "Loading..."
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adds: state.adds
  }
}

export default connect(mapStateToProps, { getAdds })(SingleItemContainer)