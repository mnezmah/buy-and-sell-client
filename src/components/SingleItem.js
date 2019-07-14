import React, { Component } from 'react'
import './singleItem.css'
import { Link } from 'react-router-dom'
import EditAdContainer from './EditAdContainer'
import EditAd from './EditAd';

export default class SingleItem extends Component {
  state = {
    edit: false
  }
  editAd = () => {
    console.log('clicked')
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    console.log('propssss', this.props)
    return (
      <div className='card'>
        <img src={this.props.picture} alt="" />
        <p className='title'>{this.props.title}</p>
        <p>{this.props.description}</p>
        <p className="price">price: <span>{this.props.price}  € </span></p>
        {/* {this.props.showEdit ?
          <button onClick={this.editAd}>Edit</button> : " "
        } */}
        {this.props.showEdit ?
          <div>
            <p>email: {this.props.email}</p>
            <p>phone: {this.props.phone}</p>
            <br />
            <button onClick={this.editAd}>Edit</button>
          </div>
          : " "
        }
        {this.state.edit ? <EditAdContainer 
        id={this.props.params.id}/> : " "}
      </div>

    )
  }
}