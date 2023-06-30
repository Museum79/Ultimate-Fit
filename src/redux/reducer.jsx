const userReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_CREATED':
        return {...state, user: action.payload, error: null};
      case 'CREATE_USER_ERROR':
        return {...state, user: null, error: action.payload};
      default:
        return state;
    }
  };
  
  export default userReducer;
  