import { combineReducers } from 'redux';
// import AuthReducer from './AuthReducer'
// import UserReducer from './UserReducer';
import PromptReducer from './PromptReducer';
import PresetsReducer from './PresetsReducer';

export default combineReducers({
  // auth: AuthReducer,
  // user: UserReducer,
  prompt: PromptReducer,
  presets: PresetsReducer,
})
