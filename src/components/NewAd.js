import React, { Component } from 'react'

export default class NewAd extends Component {

  render() {
    const { title, description, picture, price, email, phone } = this.props.state

    console.log('MY STATE:', this.props.state)
    return (
      <div>
        <h2>List a new Ad</h2>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="picture"
            value={picture}
            placeholder="put your image url here"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="price"
            value={price}
            placeholder="Price"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="description"
            value={description}
            placeholder="item desctiption"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="your.mail@domain.com"
            onChange={this.props.onChange}
          />
          <br />
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="012/3456789"
            onChange={this.props.onChange}
          />
          <br />
          <button onClick={this.props.onSumbit}>Add your ad</button>
        </form>
      </div>
    )
  }
}