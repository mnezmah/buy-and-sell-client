import React, { Component } from 'react'

export default class EditAd extends Component {
  render() {
    const { title, description, picture, price, email, phone } = this.props.state

    
    return (
      this.props.edited ? "You have submited your changes" :
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="picture"
            value={picture}
            placeholder="change image url"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="change title"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="description"
            value={description}
            placeholder="change description"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="price"
            value={price}
            placeholder="change price"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="change email"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="change phone"
            onChange={this.props.onChange}
          />
          <br />
          <button onClick={this.props.onSubmit}>Submit your changes</button>
        </form>
        <br />
      </div>
    )
  }
}
