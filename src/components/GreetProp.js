import React from "react";

const GreetProps =  props => { 
    console.log(props)
  return ( 
    <div>  
    <h1>Hello {props.name} listen {props.age}
    </h1>
    {props.children}
    </div>
)
}
export default GreetProps