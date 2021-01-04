const initialState = {
  list: [],
  buttons: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "E", "0", "="],
  ops: ["+", "-", "*", "/"],
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
