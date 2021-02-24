type DayAction = {
  type: string;
};

const day = (state = "test day 2020", action: DayAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default day;
