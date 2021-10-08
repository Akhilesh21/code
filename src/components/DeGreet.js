//first functional component
//destructure props in functional component
import React from "react";

// const DeGreet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         hello {props.name} today is {props.age}
//       </h1>
//     </div>
//   );
// };


// const DeGreet = ({name, age}) => {
//     return (
//       <div>
//         <h1>
//           hello {name} today is {age}
//         </h1>
//       </div>
//     );
//   };

const DeGreet = props => {
    const {name , age } = props
  return (
    <div>
      <h1>
        hello {props.name} today is {props.age}
      </h1>
    </div>
  );
};

export default DeGreet;
