const initialState = {
  isDark: false,
}

export default function playlist(state = initialState, action) {
  if (action.type === 'CHANGE_THEME') {
    return { isDark: action.payload }
  }
  return state
}
