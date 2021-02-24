type TitleAction = {
  type: string;
};

const title = (state = "test title", action: TitleAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default title;
