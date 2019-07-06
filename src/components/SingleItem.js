import React, { Component } from 'react'

export default class SingleItem extends Component {
  render() {
    console.log('propssss', this.props)
    return (
      <div>
        <img src={this.props.picture} alt=""/>
        <span>item: {this.props.title}</span> <br/><span>price: {this.props.price}</span><br/><br/>
        <br/>
      </div>
    )
  }
}