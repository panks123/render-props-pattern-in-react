import React, { Component } from 'react'

// This Component has the common code in it which will be shared with components

// However this Counter Component does not render anything on it's own
// It will render whatever is passed to it as render Prop

export class Counter extends Component {
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
            { this.props.render(this.state.count, this.incrementCount) }
        </>
    )
  }
}

export default Counter
