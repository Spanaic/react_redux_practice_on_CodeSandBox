import React from "react";
import { render } from "react-dom";

// 17. class構文
// class Human {
//   name!: string;
//   age!: number;
//   constructor(initName: string, initAge: number) {
//     this.name = initName;
//     this.age = initAge;
//   }
//   callName() {
//     console.log(this.name);
//   }
// }

// const Quill = new Human("Quill", 29);
// console.log(Quill);
// Quill.callName();

// const Tanaka = new Human("Tanaka", 40);
// console.log(Tanaka);
// Tanaka.callName();

// 18. React Class Component

type HumanProps = {
  age: string;
};

// https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
class Human extends React.Component<HumanProps> {
  state: {
    name: string;
  };
  constructor(props: HumanProps) {
    super(props);
    this.state = {
      name: "Quill"
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.props.age}</h3>
      </div>
    );
  }
}

render(<Human age="30" />, document.getElementById("root"));
