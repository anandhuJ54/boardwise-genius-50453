import React from 'react'
import { FooterContainer, FooterWrapper } from '../../styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <p>
          Already have a profile?{' '}
          <a
            href="https://app.experience.com/user/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log In
          </a>
        </p>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
