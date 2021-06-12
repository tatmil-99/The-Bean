const initialState = {
  val: null,
}

const stateReducer = (state=initialState, action) => {
  console.log(state);
  switch (action.type) {
    default:
      return state;
  } 
}

export default stateReducer
