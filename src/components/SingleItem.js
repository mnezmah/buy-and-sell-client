import React, { Component } from 'react'
import './singleItem.css'

export default class SingleItem extends Component {
  render() {
    console.log('propssss', this.props)
    return (
      <div className='card'>
        <img src={this.props.picture} alt=""/>
        <p className='title'>{this.props.title}</p> 
        <p className="price">price: <span>{this.props.price}  € </span></p>
        <br/>
      </div>
    )
  }
}