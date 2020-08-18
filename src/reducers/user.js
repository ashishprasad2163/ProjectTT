import {GET_USERS, GET_USERS_FAILED} from '../actions/types';

const initialState = {
  loading: true,
  users: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
