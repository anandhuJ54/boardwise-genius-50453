import React, { useState } from 'react'
import Header from './components/Header/index.jsx'
import VideoLink from './components/VideoLink/index.jsx'
import ActionSteps from './components/ActionSteps/index.jsx'
import Footer from './components/Footer/index.jsx'
import { SignupContainer } from './styles'
import { STEPS } from './utils'

const NewSignupPage = () => {
  const [currentStep, setCurrentStep] = useState(STEPS?.ONE)
  const [searchUserText, setSearchUserText] = useState(null)
  const [searchLocationText, setSearchLocationText] = useState(null)

  return (
    <SignupContainer>
      <Header>Header</Header>
      <VideoLink>See How it works</VideoLink>
      <ActionSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        searchUserText={searchUserText}
        setSearchUserText={setSearchUserText}
        searchLocationText={searchLocationText}
        setSearchLocationText={setSearchLocationText}
      />
      <Footer />
    </SignupContainer>
  )
}

export default NewSignupPage
