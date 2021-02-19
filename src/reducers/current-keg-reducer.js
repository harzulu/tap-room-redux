export default (state = null, action) => {
  const { selectedKeg } = action;
  switch (action.type) {
    case 'GET_KEG':
      return selectedKeg;
    default:
      return state;
  }
}