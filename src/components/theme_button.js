import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../actions/themes'

class ThemeButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        onClick={themes =>
          this.props.onChangeTheme(!this.props.store.themes.isDark)
        }>
        КНОПКА
      </div>
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
