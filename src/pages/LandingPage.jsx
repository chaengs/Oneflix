import MainPage from 'components/mainPage/MainPage';
import { palette } from 'lib/styles/palette';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function LandingPage() {
  return (
    <LandingPageLayout>
      <MainPage />
    </LandingPageLayout>
  );
}

export default LandingPage;

const LandingPageLayout = styled.div`
  display: flex;
  width: 100%;
  background: ${palette.backgroundColor};
`;
