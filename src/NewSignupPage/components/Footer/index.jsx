import React from 'react'
import { Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
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
        <Button type="primary" icon={<UserOutlined />} style={{ marginTop: '16px' }}>
          Create
        </Button>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
