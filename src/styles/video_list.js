import styled from 'styled-components'

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

export const Video = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 5px;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.1) black;
  border: 3px solid;
  cursor: pointer;
`

export const VideosTitle = styled.li`
  box-sizing: border-box;
  word-wrap: break-word;
  list-style-type: none;
  padding-left: 10px;
  padding-right: 5px;
  max-width: 130px;
`

export const VideosImg = styled.img`
  max-width: 120px;
  max-height: 90px;
`
