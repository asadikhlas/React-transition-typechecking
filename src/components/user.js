import React, { Component } from "react";
import UserTemplate from "./user_template";

class User extends Component {
  state = {
    name: "asad",
    lastname: "ikhlas",
    age: 22,
    hobbies: ["run", "Programming"],
    spanish: false,
    message() {
      console.log("hey");
    },
    car: { brand: "Ford", model: "focus" },
    mother: "zahida",
    color:'red'
  };


  changeColor(){
    // this.setState({
    //   color:'blue'
    this.refs.myColor.style.color = 'blue'
    }
  
  render() {
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style} ref="myColor">{this.state.mother}</h4>
        <div onClick={()=>this.changeColor()}>
          Change the color
        </div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;
