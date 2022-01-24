// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const saveState = (state: unknown) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
