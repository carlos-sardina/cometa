import styled from '@emotion/styled'
import React from 'react'
import { CometaSmallTypography, CometaTypography } from '../../Shared'

export interface SummaryProps {
  title: string,
  description?: string,
}

const StyledTitle = styled(CometaTypography)({
  fontWeight: '700',
})

const StyledDetail = styled(CometaSmallTypography)({
  color: '#979797',
})

export const Summary = ({ title, description }: SummaryProps) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      {
        description && <StyledDetail>{description}</StyledDetail>
      }
    </>
  )
}
