import React from 'react';

import {
  Layout,
  ScreenWrapper,
  Screen,
} from './MobileSizedView.styles';
import IMobileSizedView from './MobileSizedView.types';

const MobileSizedView: React.FC<IMobileSizedView> = ({
  children,
  backgroundColor,
  screenBackgroundColor,
  screenLightShadow,
  screenDarkShadow,
  isRounded = false,
}) => {
  return (
    <Layout
      backgroundColor={backgroundColor}
    >
      <ScreenWrapper>
        <Screen
          screenBackgroundColor={screenBackgroundColor}
          screenLightShadow={screenLightShadow}
          screenDarkShadow={screenDarkShadow}
          isRounded={isRounded}
        >
          {children}
        </Screen>
      </ScreenWrapper>
    </Layout>
  );
};

export default MobileSizedView;
