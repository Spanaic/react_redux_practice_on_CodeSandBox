import React from "react";
import { render } from "react-dom";

// class構文

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

const Quill = new Human("Quill", 29);
console.log(Quill);
Quill.callName();

const Tanaka = new Human("Tanaka", 40);
console.log(Tanaka);
Tanaka.callName();
