import React from 'react';
import { connect } from 'react-redux';
import { Iframe } from '../styles/Iframe';
import { VideoDetailContainer, VideoDetailText } from '../styles/video_details';


const СonnectedVideoDetailText = connect(state => ({
  store: state,
}))(VideoDetailText);


const VideoDetail = ({ currentVideo }) => {
  if (!currentVideo) {
    return <div>Loading...</div>;
  }
  const videoId = currentVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(currentVideo);
  return (
    <VideoDetailContainer>
      <div>
        <Iframe src={url} />
      </div>
      <СonnectedVideoDetailText>
        <div>{currentVideo.snippet.title}</div>
        <div>{currentVideo.snippet.description}</div>
      </СonnectedVideoDetailText>
    </VideoDetailContainer>
  );
};

export default connect(
  state => ({
    store: state,
    currentVideo: state.currentVideo[0],
  }),
  dispatch => ({}),
)(VideoDetail);