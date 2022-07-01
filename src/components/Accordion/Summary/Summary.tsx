import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

export interface SummaryProps {
  title: string,
  description?: string,
}

const StyledTitle = styled(Typography)({
  fontWeight: '700',
  color: '#333333',
})

const StyledDetail = styled(Typography)({
  color: '#979797',
  fontSize: '.85rem',
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
