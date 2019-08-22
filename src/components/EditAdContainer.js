import React, { Component } from 'react'
import superagent from 'superagent'
import EditAd from './EditAd'


export default class EditAdContainer extends Component {
  state = {
    edited: false,
    refresh: false
  }

  editAd = (id) => {
    const updatedAd = this.state
    superagent
      .put(`http://localhost:4200/ads/${id}`, updatedAd)
      .then(res => console.log('updated', res))
      .catch(console.error)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.editAd(this.props.id)
    this.setState({
      edited: !this.state.edited
    })
  }

  render() {
    return (
      <EditAd
        state={this.state}
        parentProps={this.props}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        edited={this.state.edited}
      />
    )
  }
}
