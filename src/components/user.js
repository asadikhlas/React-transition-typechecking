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
    mother: "zahida"
  };
  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;
