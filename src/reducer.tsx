// reducerを切り出す

type reducerAction = {
  type: string;
  payload: {
    num: number;
  };
};

const reducer = (state = 0, action: reducerAction) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;

    case "MINUS":
      return state - action.payload.num;

    default:
      return state;
  }
};

export default reducer;
