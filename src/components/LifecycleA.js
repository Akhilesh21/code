import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Akhilesh'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null 
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(preProps, preState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'codeEvolution'
        })
    }
    
    render() {
        console.log('Lifecycle A render')

        return (
            <div>
            <div> Lifecyle A </div>
            <button onClick={this.changeState}>change state</button>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
