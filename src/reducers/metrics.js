let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'METRICS_PENDING':
      return state;
    case 'METRICS_FULFILLED':
      console.log('metrics payload', action.payload.data);
      return [...action.payload.data];
    case 'METRICS_REJECTED':
      return state;

    default:
      return state;

  }

}
