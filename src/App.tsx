import React from "react";
import { connect } from "react-redux";

type MapStateToProps = {
  number: number;
};

type DispatchProps = {
  type: string;
  payload: { num: number };
};

type MapDispatchToProps = {
  plus: (dispatch: DispatchProps) => void;
  minus: (dispatch: DispatchProps) => void;
};

// anyの型がいくつかある
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

const mapStateToProps = (state: MapStateToProps) => {
  return {
    number: state
  };
};

const mapDispatchToProps = (dispatch: DispatchProps): MapDispatchToProps => {
  return {
    plus: (num) => {
      dispatch({
        type: "PLUS",
        payload: { num: num }
      });
    },
    minus: (num) => {
      dispatch({
        type: "MINUS",
        payload: { num: num }
      });
    }
  };
};

// HOCを使用している
// 二つ目のかっこには対象となるコンポーネントを設定する
export default connect(mapStateToProps, mapDispatchToProps)(App);
