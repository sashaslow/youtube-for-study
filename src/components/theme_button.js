import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../actions/themes'
import { StyledThemeButton } from '../styles/theme_button'

class ThemeButton extends Component {
  render() {
    return (
      <StyledThemeButton
        onClick={themes =>
          this.props.onChangeTheme(!this.props.store.themes.isDark)
        }>
        {this.props.store.themes.isDark ? 'light' : 'dark'}
      </StyledThemeButton>
    )
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onChangeTheme: themes => {
      dispatch(setTheme(themes))
    },
  })
)(ThemeButton)
