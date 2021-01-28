import React from "react";
import { render } from "react-dom";
import "./styles.css";

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
// １９. setStateでstate変更
// type HumanProps = {
//   age: string;
// };

// // https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
// class Human extends React.Component<HumanProps> {
//   state: {
//     name: string;
//   };
//   constructor(props: HumanProps) {
//     super(props);
//     this.state = {
//       name: "Quill"
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h2 onClick={this.onButtonClick}>{this.state.name}</h2>
//         <h3>{this.props.age}</h3>
//       </div>
//     );
//   }

//   onButtonClick = () => {
//     this.setState({ name: this.state.name + "さん" });
//   };
// }

// render(<Human age="30" />, document.getElementById("root"));

// 20. H2O Component
type H2OProps = {};

class H2O extends React.Component {
  state: {
    temp: number;
  };
  constructor(props: H2OProps) {
    super(props);
    this.state = { temp: 15 };
  }

  H2OState(temp: number): string {
    if (temp <= 0) {
      return "ice";
    }

    if (100 <= temp) {
      return "steam";
    }

    return "water";
  }

  render() {
    const { temp } = this.state;

    return (
      // 動的にクラスネームが変わる状態。対応したCSSを記述していく
      <div className={this.H2OState(temp)}>
        <h2>
          pahase: {this.H2OState(temp)}, {temp}度
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };
  onPlus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };
  onMinusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };
  onMinus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
