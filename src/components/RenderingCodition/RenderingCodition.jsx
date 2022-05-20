// import React, { Component } from 'react'

// export default class RenderingCodition extends Component {
//     login = true;
//     username = 'PhucBui';
//     renderCondition = () =>{
//         if (this.login){
//             return (this.username)
//         }
//         return <button>Login</button>
//     } 

//     render() {
//     return (
//       <div>
//             {/* {this.login === true ?<p> helo: {this.username} </p>: <button>Login</button> } */}
//             {this.renderCondition()}
//       </div>
//     )
//   }
// }
 import React from 'react'
 const info = {
    login : true,
    username : 'Phucbull',
 };
 const renderCondition = () => {
   if (info.login) {
     return (info.username)
   }
   return <button>Login</button>
 }
 export default function RenderingCodition() {

   return (
     <div>{renderCondition()}</div>
    //  <div>{info.login === true ? <p>my name:{info.username} </p> : <button>Login</button> }</div>
   )
 }
 