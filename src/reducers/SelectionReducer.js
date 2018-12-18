export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      //returns null at default
      return state;
  }
};
