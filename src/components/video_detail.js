import React from 'react'
import { connect } from 'react-redux'
import { Iframe } from '../styles/Iframe'
import { VideoDetailContainer, VideoDetailText } from '../styles/video_details'

const VideoDetail = ({ currentVideo }) => {
  if (!currentVideo) {
    return <div>Loading...</div>
  }
  const videoId = currentVideo.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  console.log(currentVideo)
  return (
    <VideoDetailContainer>
      <div>
        <Iframe src={url} />
      </div>
      <VideoDetailText>
        <div>{currentVideo.snippet.title}</div>
        <div>{currentVideo.snippet.description}</div>
      </VideoDetailText>
    </VideoDetailContainer>
  )
}

export default connect(state => ({
  currentVideo: state.currentVideo[0],
}))(VideoDetail)
