import React, { Component } from 'react'
import { getAdds } from '../actions/adds'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SingleItem from './SingleItem'

class Adds extends Component {

  componentDidMount() {
    this.props.getAdds()
  }

  render() {
    console.log('ADDS ARE', this.props.adds)
    if (!this.props.adds.length) { return <h3>loading...</h3> }
    return (
      <div>
        Welcome to my store
        <br /> <br />
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
            {/* <img src={add.picture} />
            <br />
            <span>item:  {add.title}</span>
            <br />
            <span>price: {add.price}</span>
            <br />
            <br /> */}
          </Link>
        })}
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