import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Akhilesh'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Akhilesh'
            })
        }, 2000)
    }
    render() {
        console.log('parent component')
        return (
            <div>
            ParentCompent
            <MemoComp name={this.state.name}/>
{/*            <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComp
