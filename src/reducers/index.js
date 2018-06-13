import { combineReducers } from 'redux'

import videos from './videos'
import currentVideo from './current_video'
import themes from './themes'

export default combineReducers({
  videos,
  currentVideo,
  themes,
})
