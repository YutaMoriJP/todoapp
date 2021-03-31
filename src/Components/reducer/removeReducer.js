const removeReducer = (state, action) => {
  return state.filter(note => note.id !== action.payload.id);
};

export default removeReducer;
