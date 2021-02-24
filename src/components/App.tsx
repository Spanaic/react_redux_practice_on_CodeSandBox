import React from "react";

// FIXME: anyの型がいくつかある
// NOTE: Presentational Component
const App = ({ number, day, title, plus, minus, asyncMinus, getJson }) => (
  <div>
    <h2>
      {title} {number} {day}
    </h2>
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
    <button
      onClick={() => {
        asyncMinus(10);
      }}
    >
      async - 10
    </button>
    <button
      onClick={() => {
        getJson();
      }}
    >
      getJson
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
