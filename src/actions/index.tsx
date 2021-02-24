export const plus = (num: number) => {
  return {
    type: "PLUS",
    payload: { num: num }
  };
};
export const minus = (num: number) => {
  return {
    type: "MINUS",
    payload: { num: num }
  };
};

// 非同期処理はできないとエラーで怒られる
// middlewareの利用を推奨される -> redux-thunk
// export const asyncMinus = (num: number) => {
//   setTimeout(() => {
//     return {
//       type: "MINUS",
//       payload: { num: num }
//     };
//   }, 1000);
// };

// 上の処理をredux-thunk用にで書き換える
export const asyncMinus = (num: number) => {
  // オブジェクト -> 関数をリターンするように書き換える
  // dispatchを引数で受け取り、actionの中で実行する。
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "MINUS",
        payload: { num: num }
      });
    }, 1000);
  };
};
