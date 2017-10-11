let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'CLIENT_FIND_PENDING':
      return state;
    case 'CLIENT_FIND_FULFILLED':
      return [...action.payload.data];
    case 'CLIENT_FIND_REJECTED':
      return state;

    default:
      return state;

  }

}
