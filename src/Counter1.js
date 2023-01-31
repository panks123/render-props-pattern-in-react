import React, { Component } from 'react'

// This Component has the common code in it

export class Counter1 extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount = ()=>{
        this.setState((prevState)=> { 
            return {count: prevState.count+1} 
        })
    }
  render() {
    return (
        <>
            { this.props.children(this.state.count, this.incrementCount) }
        </>
    )
  }
}

export default Counter1
