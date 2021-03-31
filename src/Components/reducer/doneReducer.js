const doneReducer = (state, action) => {
  return state.map(note => {
    if (note.id === action.payload.id) return { ...note, done: !note.done };
    return note;
  });
};

export default doneReducer;
