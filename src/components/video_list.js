import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentVideo } from '.././actions/current_video'
import {
  Video,
  VideosTitle,
  VideosContainer,
  VideosImg,
} from '../styles/video_list'

const ConnectedVideo = connect(state => ({
  store: state,
}))(Video)

const ConnectedVideosTitle = connect(state => ({
  store: state,
}))(VideosTitle)

class VideoList extends Component {
  render() {
    return (
      <VideosContainer>
        {this.props.store.videos.map((videos, index) => (
          <ConnectedVideo
            key={videos.etag}
            onClick={event => {
              this.props.onChangeCurrentVideo(videos)
            }}>
            <VideosImg
              key={`image ${index}`}
              innerRef={x => (videos.img = x)}
              src={videos.snippet.thumbnails.default.url}
            />
            <ConnectedVideosTitle key={index}>
              {videos.snippet.title}
            </ConnectedVideosTitle>
          </ConnectedVideo>
        ))}
      </VideosContainer>
    )
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onChangeCurrentVideo: video => {
      dispatch(setCurrentVideo(video))
    },
  })
)(VideoList)
