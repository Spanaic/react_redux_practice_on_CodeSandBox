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
