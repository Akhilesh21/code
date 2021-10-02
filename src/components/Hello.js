//with jsx  

import React from "react";

// const  Hello = () => {
// return (
//     <div className="fun">
//     <h1>hellooooooooo</h1>
//     </div>
//     )
// }
// export default Hello

//without using jsx

const Hello = () => {
    // return React.createElement('div', null,'Hello Akhilesh');
    return React.createElement(
        'div', 
        {id:'hello', className:'fun'},
        //null,
         React.createElement('h1', null, 'hello Akhilesh'));

}
export default Hello
 