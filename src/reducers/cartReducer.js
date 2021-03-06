const initialState = {
  items1: [],
  items2: [],
  items3: [],
  items4: [],
  items5: [],
}

const cartReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_ROBUSTA":
      return {...state, items1: [...state.items1, action.payload]};
    case "ADD_EXCELSA":
      return {...state, items2: [...state.items2, action.payload]};
    case "ADD_LIBERICA":
      return {...state, items3: [...state.items3, action.payload]};
    case "ADD_ARABICA":
      return {...state, items4: [...state.items4, action.payload]};
    case "REMOVE_ROBUSTA":
      return {...state, items1: [...state.items1.slice(0, -1)]};
    case "REMOVE_EXCELSA":
      return {...state, items2: [...state.items2.slice(0, -1)]};
    case "REMOVE_LIBERICA":
      return {...state, items3: [...state.items3.slice(0, -1)]};
    case "REMOVE_ARABICA":
      return {...state, items4: [...state.items4.slice(0, -1)]};
    default:
      return state;
  }
}

export default cartReducer;