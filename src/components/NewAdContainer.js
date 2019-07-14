import React, { Component } from 'react'
import NewAd from './NewAd'
import superagent from 'superagent'
// import { createAd } from '../actions/ads'
import { connect } from 'react-redux'

class NewAdContainer extends Component {
  state = {
    added: false
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSumbit = (e) => {
    e.preventDefault()
    console.log('THIS IS MY TITLE', this.state.title)

    const newAd = this.state

    superagent.post(
      'http://localhost:4200/ads')
      .send(newAd)
      .then(res => console.log('submitted', res))
      .catch(console.error)
    console.log('THIS IS MY TITLE', this.state.title)
    console.log('Ad submited')
    this.setState({
      // title: "",
      // picture: "",
      // description: "",
      // price: "",
      // email: "",
      // phone: "",
      added: !this.state.added
    })
    const redirect = () => {
      setTimeout(() => this.props.history.push('/'), 1300)
    }
    redirect()
  }

  render() {

    return (
      this.state.added ? <h1>Your advertisemnt is added succesfuly</h1> :
        <div>
          <NewAd
            state={this.state}
            onChange={this.onChange}
            onSumbit={this.onSumbit}
          />
        </div>
    )
  }
}

const mapStateToPorps = (state) => {
  return {
    ad: state.ad
  }
}

// const mapDispatchToProps = { createAd }

export default connect(mapStateToPorps)(NewAdContainer)