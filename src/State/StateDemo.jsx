import React, { Component } from 'react'

export default class StateDemo extends Component {
  state = {
      status : false,
  }

  userLogin = {
      name : 'PhucBull',
      age: 20,
  }

  login = () =>{
    let newState = {
        status :true
    }
    this.setState(newState,() => {
        console.log(this.state);
    })
  }

  renderUserLogin = () => {
      if (this.state.status)  {
          return <div className="text-center">{this.userLogin.name}</div>
      }
      return <button onClick={() => {this.login()}}>Login</button>
      
  }
  render() {
    return (
      <div>{this.renderUserLogin()}</div>
    )
  }
}
