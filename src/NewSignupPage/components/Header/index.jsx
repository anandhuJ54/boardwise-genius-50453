import React from 'react'
import {
  HeaderContainer,
  StyledText,
  ContainerItems,
  LogoContainer,
} from '../../styles'

const Header = () => {
  return (
    <HeaderContainer>
      <ContainerItems>
        <LogoContainer>
          <svg
            width="180"
            height="32"
            viewBox="0 0 180 32"
            fill="none"
            style={{
              height: '2rem',
            }}
          >
            <StyledText x="0" y="24">
              experience.com
            </StyledText>
          </svg>
        </LogoContainer>
      </ContainerItems>
    </HeaderContainer>
  )
}

export default Header
