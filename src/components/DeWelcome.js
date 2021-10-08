//destructure props in Class component

import React, { Component } from "react";


class DeWelcome extends Component{
    render(){
        //for props
        const {name, age} = this.props
        //for state
        // const {a1, a2} this.state
        return (
        <h1>
        hello {name} today is {age}       
         </h1>
         )
    }
}

export default DeWelcome