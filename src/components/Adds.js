import React, { Component } from 'react'
import { getAdds } from '../actions/adds'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SingleItem from './SingleItem'
// import './Adds.css'

class Adds extends Component {

  componentDidMount() {
    this.props.getAdds()
  }

  render() {
    console.log('ADDS ARE', this.props.adds)
    if (!this.props.adds.length) { return <h3>loading...</h3> }
    return (
      <div>
        <h3>Welcome to my store</h3>
        <div className="container">
          {this.props.adds.map(add => {
            return <Link
              key={add.id}
              to={`/singleitem/${add.id}`}
            >
              <SingleItem
                id={add.id}
                title={add.title}
                picture={add.picture}
                price={add.price}
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
    adds: state.adds
  }
}

export default connect(mapStateToProps, { getAdds })(Adds)