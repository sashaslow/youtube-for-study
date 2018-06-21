import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
import ThemeButton from './components/theme_button'
import Content from './Content'
import { VideoContainer } from './styles/video_container'
import { SearchBarContainer } from './styles/search_bar_container'
import { asyncGetTracks } from './actions/videos'
import { setCurrentVideo } from './actions/current_video'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'

import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyCH4Xp6K_n7hUKDJHDW6CMt2R-LqDk0THU'

class App extends Component {
  componentWillMount() {
    this.props.onGetTracks('Wittgenstein')
    YTSearch({ key: API_KEY, term: 'Wittgenstein' }, videos => {
      this.props.onChangeCurrentVideo(videos[0])
    })
  }
  render() {
    return (
      <ThemeProvider theme={this.props.store.themes.isDark ? dark : light}>
        <Content>
          <SearchBarContainer>
            <SearchBar />
            <ThemeButton
              theme={this.props.store.themes.isDark ? dark : light}
            />
          </SearchBarContainer>
          <VideoContainer>
            <VideoDetail />
            <VideoList />
          </VideoContainer>
        </Content>
      </ThemeProvider>
    )
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
    onChangeCurrentVideo: video => {
      dispatch(setCurrentVideo(video))
    },
  })
)(App)
