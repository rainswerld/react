import React, { Component } from 'react'

class EditableHeader extends Component {
  state = {
    text: 'Welcome to React!'
  }

  handleChange = (event) => {
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
