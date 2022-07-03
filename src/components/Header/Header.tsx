import styled from '@emotion/styled';
import React from 'react';
import { CometaTypography } from '../Shared';

export interface HeaderProps {
  title?: string;
  logoUrl?: string;
}

const Container = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid #e6e6e6',
  backgroundColor: '#fff',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 9999,
});

const ImgContainer = styled('div')({
  width: '50px',
  height: '50px',
  marginRight: '1.25rem',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
});

export const Header = ({ title, logoUrl }: HeaderProps) => {
  return (
    <Container>
      <ImgContainer>
        <StyledImage src={logoUrl} alt={title} />
      </ImgContainer>
      <CometaTypography>{title}</CometaTypography>
    </Container>
  );
};
