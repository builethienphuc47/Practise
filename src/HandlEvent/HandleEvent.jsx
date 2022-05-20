import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (name1) => {
    alert("helo: "+ (name1));
  };
  //Truyền tham số xủa lý khi Click
  handleClickparam = (param,button) => {
    console.log("param",param);
    console.log("button: ", button.target)
  }
  render() {
    const handleClickFuntion = (name) => {
      console.log("Chao" + name)
    }
    return (
      <div>
        {/* <button id='btn' onClick={function(){   
              alert("helo")
          }}> Click me </button>       */}

        {/* <button onClick={this.handleClick}>Click me</button> */}
        <button
          className="btn"
          onClick={() => {
            this.handleClick("phuc") ;
          }}>Click me</button>
        <div>
        <button id="btnClickme" onClick={() => {handleClickFuntion("haha")}}>
            Click me!
        </button>
        <button id="btnClickme" onClick={this.handleClickparam.bind(this,"hello men")}>Click me!</button>
        </div>
      </div>
      
    );
  }
}
