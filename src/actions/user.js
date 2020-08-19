import axios from 'axios';
import {GET_USERS, GET_USERS_FAILED} from './types';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://api.jsonbin.io/b/5f350767bf24ad02bef166e7',
    );
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USERS_FAILED,
    });
  }
};
