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
  render() {
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style}>{this.state.mother}</h4>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;
