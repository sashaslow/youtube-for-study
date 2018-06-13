import { combineReducers } from 'redux';

import videos from './videos';
import currentVideo from './current_video';

export default combineReducers({
  videos,
  currentVideo,
});