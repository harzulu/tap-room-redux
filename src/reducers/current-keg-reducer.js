export default (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
    case 'GET_KEG':
      return state[id];
    default:
      return state;
  }
}