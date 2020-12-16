import React, { Component } from 'react'

class EditableHeader extends Component {
  constructor () {
    super()

    this.state = {
      text: 'Welcome to React!'
    }

    // What is this? What happens if we comment it out? Can we avoid this?
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ text: event.target.value })
  }

  render () {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input onChange={this.handleChange} />
      </div>
    )
  }
}

export default EditableHeader
