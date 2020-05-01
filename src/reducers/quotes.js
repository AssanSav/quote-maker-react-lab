export default (state = [], action) => {
  debugger
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
  }
  return state;
}
