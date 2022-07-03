import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { CometaTypography } from '../../components';

export const FlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Card = styled(Paper)({
  backgroundColor: '#FFFFFF',
  padding: '1.25rem 5vw',
});

export const Background = styled('div')({
  backgroundColor: '#F3F3F3',
  padding: '4rem 1rem 1rem 1rem',
  minHeight: '100vh',
});

export const StyledCometaTypography = styled(CometaTypography)({
  marginTop: '1rem',
});

export const AccordionItem = styled('div')`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled('div')({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
});
