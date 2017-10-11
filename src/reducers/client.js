let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'CLIENT_PENDING':
      return state;
    case 'CLIENT_FULFILLED':
      return [...action.payload.data];
    case 'CLIENT_REJECTED':
      return state;

    case 'CLIENT_ADD_PENDING':
      return state;
    case 'CLIENT_ADD_FULFILLED':
      return [...action.payload.data];
    case 'CLIENT_ADD_REJECTED':
      return state;

    case 'CLIENT_DELETE_PENDING':
      return state;
    case 'CLIENT_DELETE_FULFILLED':
      return [...action.payload.data];
    case 'CLIENT_DELETE_REJECTED':
      return state;

    case 'CLIENT_UPDATE_PENDING':
      return state;
    case 'CLIENT_UPDATE_FULFILLED':
      return [...action.payload.data];
    case 'CLIENT_UPDATE_REJECTED':
      return state;

    default:
      return state;

  }

}
