import React from 'react'
import VideoDropDownIcon from '../partials/VideoDropDownIcon'
import { VideoLinkConatiner, VideoText, VideoButton } from '../../styles'

const VideoLink = () => {
  return (
    <VideoLinkConatiner>
      <VideoText>
        See how thousands of professionals rank #1 on Google
      </VideoText>
      <VideoButton>
        <VideoDropDownIcon />
        See How it Works
      </VideoButton>
    </VideoLinkConatiner>
  )
}

export default VideoLink
