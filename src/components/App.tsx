import React from "react";

// FIXME: anyの型がいくつかある
// NOTE: Presentational Component
const App = ({ number, plus, minus }) => (
  <div>
    <h2>App {number}</h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      + 10
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      - 10
    </button>
  </div>
);

export default App;

// NOTE: Container Component
//  ロジックに関する下の部分をcontainersディレクトリに切り出す
// const mapStateToProps = (state: MapStateToProps) => {
//   return {
//     number: state
//   };
// };

// const mapDispatchToProps = (dispatch: DispatchProps): MapDispatchToProps => {
//   return {
//     plus: (num) => {
//       dispatch({
//         type: "PLUS",
//         payload: { num: num }
//       });
//     },
//     minus: (num) => {
//       dispatch({
//         type: "MINUS",
//         payload: { num: num }
//       });
//     }
//   };
// };

// // HOCを使用している
// // 二つ目のかっこには対象となるコンポーネントを設定する
// export default connect(mapStateToProps, mapDispatchToProps)(App);
