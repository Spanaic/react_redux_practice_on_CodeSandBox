import { connect } from "react-redux";
import App from "../components/App";
import { plus, minus, asyncMinus, getJson } from "../actions";

type MapStateToProps = {
  number: number;
  title: string;
  day: string;
};

type DispatchProps = {
  type: string;
  payload: { num: number };
};

type MapDispatchToProps = {
  plus: (dispatch: DispatchProps) => void;
  minus: (dispatch: DispatchProps) => void;
  asyncMinus: (dispatch: DispatchProps) => void;
  getJson: (dispatch: DispatchProps) => void;
};

const mapStateToProps = (state: MapStateToProps) => {
  return {
    // reducersでstateが分離したので、state.numberでアクセスする
    number: state.number,
    title: state.title,
    day: state.day
  };
};

// NOTE: Container Component
//  ロジックに関する下の部分をcontainersディレクトリに切り出す
const mapDispatchToProps = (dispatch: DispatchProps): MapDispatchToProps => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    },
    asyncMinus: (num) => {
      dispatch(asyncMinus(num));
    },
    getJson: () => {
      dispatch(getJson());
    }
  };
};

// HOCを使用している
// 二つ目のかっこには対象となるコンポーネントを設定する
export default connect(mapStateToProps, mapDispatchToProps)(App);
