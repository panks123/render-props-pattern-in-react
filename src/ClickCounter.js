import React, { Component } from 'react'

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>ClickCounter component</h1>
        <button onClick={this.props.incrementCounter}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default ClickCounter
