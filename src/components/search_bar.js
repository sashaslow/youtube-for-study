import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from '../styles/Input'
import { light } from '../styles/themes/light'
import { dark } from '../styles/themes/dark'
import { asyncGetTracks } from '.././actions/videos'
import { ThemeProvider } from 'styled-components'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  render() {
    return (
      <div className="search-bar">
        <ThemeProvider theme={this.props.store.themes.isDark ? dark : light}>
          <Input
            debounceTimeout={500}
            placeholder="just type here something"
            value={this.state.value}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </ThemeProvider>
      </div>
    )
  }
  onInputChange(value) {
    this.setState({ value })
    this.props.onGetTracks(value)
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onGetTracks: term => {
      dispatch(asyncGetTracks(term))
    },
  })
)(SearchBar)
