import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {

      return  this.state.isLoggedIn && <div>welcome Akhilesh </div>


    //  return(
    //      this.state.isLoggedIn ?(
    //      <div>Welcome Akhilesh</div>
    //       ) : (
    //      <div>Welcome guest</div>
    //       )
    //  )   

    //     let message
    //     if(this.state.isLoggedIn){
    //         message = <div>Welcome Akhilesh</div>
    //     }else{
    //         message = <div>Welcome guest</div>
    //     }

    // return <div>{message}</div>

    //     if(this.state.isLoggedIn){
    //         return(
    //             <div> welcome Akhilesh</div>
    //         )
    //     }else{
    //         return(
    //             <div>
    //             welcome guest
    //             </div>
    //         )
    //     }
       
     }
}

export default UserGreeting
