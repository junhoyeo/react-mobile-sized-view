import styled, { css } from 'styled-components';

import {
  ILayout,
  IScreen,
} from './MobileSizedView.types';

export const Layout = styled.main<ILayout>`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  ${({ backgroundColor = '#f3f3f3' }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `};
`;

export const ScreenWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Screen = styled.div<IScreen>`
  width: 100%;
  max-width: 500px;
  height: calc(100vh - 45px);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1100px) {
    margin-right: 25px;
  }

  @media screen and (max-width: 900px) {
    margin-right: 0;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
    max-width: 100%;
    height: 100vh;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  ${({ screenBackgroundColor = '#fefefe' }) => screenBackgroundColor && css`
    background-color: ${screenBackgroundColor};
  `};

  ${({
    screenLightShadow = '-31px -31px 62px #d9d9d9',
    screenDarkShadow = '-31px -31px 62px #ffffff',
  }) => css`
    background-color: ${screenLightShadow}, ${screenDarkShadow};
  `};
`;
