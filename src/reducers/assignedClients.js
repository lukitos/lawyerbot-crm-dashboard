let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'ASSIGNMENT_PENDING':
      return state;
    case 'ASSIGNMENT_FULFILLED':
      return [...action.payload.data];
    case 'ASSIGNMENT_REJECTED':
      return state;

    default:
      return state;

  }

}
