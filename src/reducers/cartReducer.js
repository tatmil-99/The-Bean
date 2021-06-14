const initialState = {
  items: [],
}

const cartReducer = (state=initialState, action) => {
  console.log(state)
  switch(action.type) {
    case "ADD_BEANS":
      return {...state, items: [...state.items, action.payload]};
    default:
      return state;
  }
}

export default cartReducer;