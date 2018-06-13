export const setTheme = theme => (dispatch) => {
    dispatch({ type: 'CHANGE_THEME', payload: theme });
  };
  