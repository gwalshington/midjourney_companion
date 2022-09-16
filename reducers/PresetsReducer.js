import {
  PRESETS_FETCH_SUCCESS,
  PRESETS_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
  loaded: true,
  artists: [],
  lighting: [],
  colors: [],
  camera: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRESETS_FETCH_SUCCESS:
      return {...state, [action.payload.key]: action.payload.value}
  default:
    return state;
  }
}
