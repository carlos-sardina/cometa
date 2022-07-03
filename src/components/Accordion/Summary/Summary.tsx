import styled from '@emotion/styled';
import React from 'react';
import { CometaSmallTypography, CometaTypography } from '../../Shared';

export interface SummaryProps {
  title: string;
  description?: string;
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledTitle = styled(CometaTypography)({
  fontWeight: '700',
});

const StyledDetail = styled(CometaSmallTypography)({
  color: '#979797',
});

export const Summary = ({ title, description }: SummaryProps) => {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      {description && <StyledDetail>{description}</StyledDetail>}
    </Container>
  );
};
