export const ADD_POST = 'ADD_POST';

export const addPost = post => dispatch => {
  dispatch({
    type: ADD_POST,
    payload: post,
  });
};
