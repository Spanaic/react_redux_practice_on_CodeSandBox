import React from "react";
import { render } from "react-dom";

class Human {
  name!: string;
  age!: number;
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  callName() {
    console.log(this.name);
  }
}

const yamanaka = new Human("yamanaka", 29);
console.log(yamanaka);
