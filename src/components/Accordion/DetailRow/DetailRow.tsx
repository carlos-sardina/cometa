import styled from '@emotion/styled'
import React from 'react'
import { CometaTypography, CometaSmallTypography } from '../../Shared'

export interface DetailRowProps {
  title: string,
  description: string,
  onlySummary?: boolean,
  amount?: string,
  amountSubtext?: string,
  discount?: string,
}

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

const StyledTitle = styled(CometaTypography)({
  fontWeight: '500',
})

const GrayLinedTypography = styled(CometaTypography)({
  color: '#828282',
  textDecoration: 'line-through',
  marginRight: '0.5rem',
  fontWeight: '300',
})

const ContainerRightAligned = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
})

export const DetailRow = ({
  title,
  description,
  amount,
  amountSubtext,
  discount,
  onlySummary = false,
}: DetailRowProps) => {
  return (
    <Container>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <CometaSmallTypography>{description}</CometaSmallTypography>
      </div>
      {
        !onlySummary && (
          <ContainerRightAligned>
            <ContainerRightAligned>
              { discount && <GrayLinedTypography>{discount}</GrayLinedTypography> }
              { amount && <CometaTypography>{amount}</CometaTypography> }
            </ContainerRightAligned>
            { amountSubtext && <CometaSmallTypography>{amountSubtext}</CometaSmallTypography> }
          </ContainerRightAligned>
        )
      }
    </Container>
  )
}
