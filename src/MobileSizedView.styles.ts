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
`;

export const ScreenWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Screen = styled.div<IScreen>`
  width: 100%;
  max-width: 500px;
  height: 100vh;
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

  ${({ isRounded = false }) => isRounded && css`
    height: calc(100vh - 45px);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  `};
`;
