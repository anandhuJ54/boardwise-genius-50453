import React from 'react'
import { Button, Select } from 'antd'
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
        <Button type="primary" icon={<UserOutlined />} style={{ marginTop: '16px', borderRadius: '8px' }}>
          Create
        </Button>
        <Select
          placeholder="Select a city"
          style={{ width: '100%', marginTop: '16px' }}
          options={[
            { value: 'new-york', label: 'New York' },
            { value: 'los-angeles', label: 'Los Angeles' },
            { value: 'chicago', label: 'Chicago' },
            { value: 'houston', label: 'Houston' },
            { value: 'phoenix', label: 'Phoenix' }
          ]}
        />
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
