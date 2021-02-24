import { connect } from "react-redux";
import App from "../components/App";
import { plus, minus } from "../actions";

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

const mapStateToProps = (state: MapStateToProps) => {
  return {
    number: state
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
    }
  };
};

// HOCを使用している
// 二つ目のかっこには対象となるコンポーネントを設定する
export default connect(mapStateToProps, mapDispatchToProps)(App);
