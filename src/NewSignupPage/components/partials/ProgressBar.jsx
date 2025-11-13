import React from 'react'
import { Progress } from 'antd'
import { ProgressWrapper, ProgressLabel } from '../../styles'
import { PROGRESS_STATS } from '../../utils'

const ProgressBar = ({ currentStep = 1 }) => {
  return (
    <ProgressWrapper>
      <ProgressLabel>
        <span>Step {currentStep} of 3</span>
        <span>{PROGRESS_STATS?.[currentStep]}%</span>
      </ProgressLabel>
      <Progress
        percent={PROGRESS_STATS?.[currentStep]}
        strokeColor={{
          '0%': 'rgb(60, 131, 246)',
          '100%': 'rgb(181, 70, 236)',
        }}
        showInfo={false}
      />
    </ProgressWrapper>
  )
}

export default ProgressBar
