import React, { Fragment } from 'react'
import { ChevronLeft } from 'react-feather'
import ProgressBar from '../partials/ProgressBar'
import SearchInput from '../partials/SearchInput'
import {
  ActionWrapper,
  ActionContainer,
  StepOneTextWrapper,
  SearchInputWrapper,
  BackButton,
} from '../../styles'
import { STEPS } from '../../utils'

const ActionSteps = ({
  currentStep,
  setCurrentStep,
  searchUserText,
  setSearchUserText,
}) => {
  const onSearchUser = value => {
    console.log('This is ON_SEARCH', { value, currentStep })
    setSearchUserText(value)
  }

  const handleInputAction = () => {
    setCurrentStep(currentStep + 1)
  }
  const getContentBySteps = currentStep => {
    switch (currentStep) {
      case STEPS.ONE:
        return (
          <Fragment>
            <StepOneTextWrapper>
              <h1>Let&apos;s find you</h1>
              <h2>We&apos;ll look for your existing profile.</h2>
            </StepOneTextWrapper>
            <SearchInputWrapper>
              <SearchInput
                placeholder="Enter your name here"
                onSearch={onSearchUser}
                handleInputAction={handleInputAction}
                searchTextValue={searchUserText}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setSearchUserText={setSearchUserText}
              />
            </SearchInputWrapper>
          </Fragment>
        )
      case STEPS.TWO:
        return (
          <Fragment>
            <BackButton onClick={() => setCurrentStep(currentStep - 1)}>
              <ChevronLeft size={16} />
              Back
            </BackButton>
            <StepOneTextWrapper>
              <h1>Where are you located?</h1>
              <h2>We&apos;ll filter our search for profiles in your area</h2>
            </StepOneTextWrapper>
            <SearchInputWrapper>
              <SearchInput
                placeholder="Enter city & state"
                onSearch={onSearchUser}
                handleInputAction={handleInputAction}
                searchTextValue={searchUserText}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setSearchUserText={setSearchUserText}
              />
            </SearchInputWrapper>
          </Fragment>
        )

      case STEPS.THREE:
        return (
          <Fragment>
            <BackButton onClick={() => setCurrentStep(currentStep - 1)}>
              <ChevronLeft size={16} />
              Back
            </BackButton>
            <StepOneTextWrapper>
              <h1>Where are you located?</h1>
              <h2>We&apos;ll filter our search for profiles in your area</h2>
            </StepOneTextWrapper>
            <SearchInputWrapper>
              <SearchInput
                placeholder="Enter city & state"
                onSearch={onSearchUser}
                handleInputAction={handleInputAction}
                searchTextValue={searchUserText}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setSearchUserText={setSearchUserText}
              />
            </SearchInputWrapper>
          </Fragment>
        )
      default:
        return null
    }
  }
  return (
    <ActionWrapper>
      <ActionContainer>
        <ProgressBar currentStep={currentStep} />
        {getContentBySteps(currentStep)}
      </ActionContainer>
    </ActionWrapper>
  )
}

export default ActionSteps
