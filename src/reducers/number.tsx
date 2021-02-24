// reducerを切り出す

type NumberAction = {
  type: string;
  payload: {
    num: number;
  };
};

const number = (state = 0, action: NumberAction) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;

    case "MINUS":
      return state - action.payload.num;

    default:
      return state;
  }
};

export default number;
