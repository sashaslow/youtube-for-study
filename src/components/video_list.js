import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentVideo } from '.././actions/current_video'
import {
  Video,
  VideosTitle,
  VideosContainer,
  VideosImg,
} from '../styles/video_list'

class VideoList extends Component {
  render() {
    return (
      <VideosContainer>
        {this.props.videos.map((videos, index) => (
          <Video
            key={videos.etag}
            onClick={() => {
              this.props.onChangeCurrentVideo(videos)
            }}>
            <VideosImg
              key={`image ${index}`}
              innerRef={x => (videos.img = x)}
              src={videos.snippet.thumbnails.default.url}
            />
            <VideosTitle key={index}>{videos.snippet.title}</VideosTitle>
          </Video>
        ))}
      </VideosContainer>
    )
  }
}

export default connect(
  state => ({
    videos: state.videos,
  }),
  dispatch => ({
    onChangeCurrentVideo: video => {
      dispatch(setCurrentVideo(video))
    },
  })
)(VideoList)
