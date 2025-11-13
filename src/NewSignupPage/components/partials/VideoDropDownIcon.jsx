import React from 'react'
import { ChevronDown } from 'react-feather'
import { DropDownIconWrapper } from '../../styles'

const VideoDropDownIcon = () => {
  return (
    <DropDownIconWrapper>
      <ChevronDown size={16} stroke={'#fff'} />
    </DropDownIconWrapper>
  )
}

export default VideoDropDownIcon
