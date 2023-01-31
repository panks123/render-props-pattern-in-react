import React, { Component } from 'react'

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1>HoverCounter component</h1>
        <h2 onMouseOver={this.props.incrementCounter}>Hover on me: (Hoverd {this.props.count} times)</h2>
      </div>
    )
  }
}

export default HoverCounter