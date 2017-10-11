let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'CHARTDATA_PENDING':
      return state;
    case 'CHARTDATA_FULFILLED':
      return action.payload.data;
    case 'CHARTDATA_REJECTED':
      return state;

    default:
      return state;

  }

}
