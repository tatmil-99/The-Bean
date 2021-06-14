const addTitle = (dispatch) => {
  return dispatch({type: "SHOW-TITLE"});
}

export const addBeans = (dispatch, item) => {
  return dispatch({type: "ADD_BEANS", item});
}

