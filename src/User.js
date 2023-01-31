import React, { Component } from 'react'

export class User extends Component {
    
  render() {
    return (
      <div>
        {/* {this.props.render(false)} */}
        {/* This function 'render' we're calling it here is the function passed from the parent component as render prop
            It is not same as the render lifecycle method and hence does not affect the render lifecycle method in React.
        */}
        {this.props.render(true)}
      </div>
    )
  }
}

export default User
