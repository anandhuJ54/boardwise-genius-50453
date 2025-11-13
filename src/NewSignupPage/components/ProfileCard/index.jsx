import React from 'react'
import {
  ProfileContainer,
  ProfileLogoIcon,
  ProfileDetails,
  ProfileName,
  ClaimButton,
} from '../../styles'

const ProfileCard = () => {
  return (
    <ProfileContainer>
      <ProfileLogoIcon>
        <span>SB</span>
      </ProfileLogoIcon>
      <ProfileDetails>
        <ProfileName class="flex items-center gap-1 sm:gap-2">
          <h3>Stevie Burger</h3>
        </ProfileName>
        <p>Finance</p>
        <p>Hebron, KY</p>
      </ProfileDetails>
      <ClaimButton>Claim</ClaimButton>
    </ProfileContainer>
  )
}

export default ProfileCard
