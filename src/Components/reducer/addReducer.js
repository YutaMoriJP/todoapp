const addReducer = action => {
  return {
    title: action.payload.title,
    value: action.payload.value,
    id: action.payload.id,
    done: false,
  };
};

export default addReducer;
