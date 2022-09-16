import {
  ADD_PROMPT_ITEM,
  REMOVE_PROMPT_ITEM,
  UPDATE_PROMPT_STRING,
  UPDATE_PROMPT_SINGLE_ITEM
} from '../actions/types';

const INITIAL_STATE = {
  loaded: false,
  type: 'text',
  mainIdea: '',
  prompt: '',
  mainIdea: '',
  noInclude: [],
  descriptors: [],
  artists: [],
  lighting: [],
  colors: [],
  camera: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROMPT_SINGLE_ITEM:
      return {...state, [action.payload.key]: action.payload.value}
    case  ADD_PROMPT_ITEM:
      const { key, value } = action.payload
      items = [...state[key], value]
      return {...state, [key]: items}
    case REMOVE_PROMPT_ITEM:
      items = state[action.payload.key]
      items.splice(action.payload.index, 1)
      return {...state, [action.payload.key]: items}
    case  UPDATE_PROMPT_STRING:
      noInclude = state.noInclude.length > 0 ? `--no ${state.noInclude.join(", ")}` : ''
      descriptors = state.descriptors.length > 0 ? `${state.descriptors.join(":: ")}:: ` : ''
      artists = state.artists.length > 0 ? `by ${state.artists.join(", by ")}` : ''
      lighting = state.lighting.length > 0 ? `, ${state.lighting.join(", ")}` : ''
      colors = state.colors.length > 0 ? `, ${state.colors.join(", ")}` : ''
      camera = state.camera.length > 0 ? `, ${state.camera.join(", ")}` : ''

      return {...state, prompt: `/imagine prompt: ${state.mainIdea}:: ${artists} ${descriptors} ${lighting} ${colors} ${camera} ${noInclude}`}
  default:
    return state;
  }
}
