import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import App from "./App";

// NOTE: 17. class構文
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

// NOTE: 18. React Class Component
// NOTE: １９. setStateでstate変更
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

// NOTE: 20. H2O Component
// type H2OProps = {};

// class H2O extends React.Component {
//   state: {
//     temp: number;
//   };
//   constructor(props: H2OProps) {
//     super(props);
//     this.state = { temp: 15 };
//   }

//   H2OState(temp: number): string {
//     if (temp <= 0) {
//       return "ice";
//     }

//     if (100 <= temp) {
//       return "steam";
//     }

//     return "water";
//   }

//   render() {
//     const { temp } = this.state;

//     return (
//       // 動的にクラスネームが変わる状態。対応したCSSを記述していく
//       <div className={this.H2OState(temp)}>
//         <h2>
//           pahase: {this.H2OState(temp)}, {temp}度
//         </h2>
//         <button onClick={this.onPlusClick}>+</button>
//         <button onClick={this.onPlus10Click}>+10</button>
//         <button onClick={this.onMinusClick}>-</button>
//         <button onClick={this.onMinus10Click}>-10</button>
//       </div>
//     );
//   }

//   onPlusClick = () => {
//     const { temp } = this.state;
//     this.setState({ temp: temp + 1 });
//   };
//   onPlus10Click = () => {
//     const { temp } = this.state;
//     this.setState({ temp: temp + 10 });
//   };
//   onMinusClick = () => {
//     const { temp } = this.state;
//     this.setState({ temp: temp - 1 });
//   };
//   onMinus10Click = () => {
//     const { temp } = this.state;
//     this.setState({ temp: temp - 10 });
//   };
// }

// render(<H2O />, document.getElementById("root"));

// NOTE: 24. map
// NOTE: 25. filter
// const array1 = [0, 1, 2, 3, 4];

// const newArray1 = array1.map((output, index) => {
//   return `${index}番目は${output}です。`;
// });

// console.log(newArray1);

// const array2 = ["tanaka", "sasaki", "ueno", "kobayakawa", "chou"];

// const newArray2 = array2.map((output, index) => {
//   return `${index}番目は${output}さんです。`;
// });

// console.log(newArray2);

// const array3 = [1, 2, 3, 4, 5];
// const newArray3 = array3.filter((output, index) => {
//   return output > 3;
// });

// console.log(newArray3);

// const newArray4 = array2.filter((output, index) => {
//   return output === "sasaki";
// });

// console.log(newArray4);

// const newArray5 = array2.filter((output, index) => {
//   return output.length > 7;
// });

// console.log(newArray5);

// NOTE: 26. mapとfilterの実装
// type Todo = {
//   id: number;
//   title: string;
// };

// const todos = [
//   { id: 1, title: "title1" },
//   { id: 2, title: "title2" },
//   { id: 3, title: "title3" },
//   { id: 4, title: "title4" }
// ];

// const deleteTargetId = 4;

// const deletedArray: Todo[] = todos.filter((todo) => todo.id !== deleteTargetId);

// console.log(deletedArray);

// // FIXME: todos.todosの謎を解明する
// const Todos = (todos: Todo[]) => {
//   const list = todos.todos.map((todo: Todo) => {
//     return (
//       <li key={todo.id}>
//         {todo.id} {todo.title}
//       </li>
//     );
//   });

//   return <ul>{list}</ul>;
// };

// render(<Todos todos={todos} />, document.getElementById("root"));

// NOTE: セクション8 50.createStoreから
const store = createStore(reducer);

console.log(store);
console.log(reducer);

// subscribeはstateの値に変更があれば関数を実行する。
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
