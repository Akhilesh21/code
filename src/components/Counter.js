
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }

    // increment() {
    //     this.setState({
    //         count : this.state.count + 1
    //     },
    //     () => {
    //         console.log('CallBack value', this.state.count)
    //     }
    //     )
    //     console.log(this.state.count)
    // }

    increment() {
         this.setState (preState => ({
             count: preState.count + 1
         }))
         console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    decrement() {
        this.setState({
            count : this.state.count - 1
        })
    }
    
    render() {
        return (
            <div>
            <div>Count -   {this.state.count} </div>
        {/*<button onClick = {() => this.increment()}>Increment</button>*/}
            <button onClick = {() => this.incrementFive()}>Increment</button>

            <button onClick = {() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
