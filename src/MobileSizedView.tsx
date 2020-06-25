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
        >
          {children}
        </Screen>
      </ScreenWrapper>
    </Layout>
  );
};

export default MobileSizedView;
