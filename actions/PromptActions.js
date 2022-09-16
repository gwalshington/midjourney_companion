import {
  ADD_PROMPT_ITEM,
  REMOVE_PROMPT_ITEM,
  UPDATE_PROMPT_STRING,
  UPDATE_PROMPT_SINGLE_ITEM
} from './types';
import { firebaseApp } from '../firebaseConfig'
import firebase from 'firebase/app';
import { getDatabase, ref, onValue, get, query, limitToLast, push, remove, set, orderByChild, orderBy, orderByKey, endBefore, limitToFirst, equalTo, update, increment  } from "firebase/database";
const database = getDatabase(firebaseApp);

export const updatePromptString = () => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PROMPT_STRING,
    })
  }
}

export const updatePromptSingleItem = (key, value) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PROMPT_SINGLE_ITEM,
      payload: {key, value}
    })
  }
}

export const addPromptItem = (key, value) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PROMPT_ITEM,
      payload: {key, value}
    })
  }
}

export const removePromptItem = (key, index) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PROMPT_ITEM,
      payload: {key, index}
    })
  }
}
