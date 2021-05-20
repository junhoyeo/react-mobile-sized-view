import React from 'react';

import {
  Layout,
  ScreenWrapper,
  Screen,
} from './MobileSizedView.styles';
import IMobileSizedView from './MobileSizedView.types';

const MobileSizedView: React.FC<IMobileSizedView> = ({
  children,
  isRounded = false,
  absoluteChildren = null,
  screenStyle = {},
  screenWrapperStyle = {},
  ...props
}) => {
  return (
    <Layout {...props}>
      <ScreenWrapper style={screenWrapperStyle}>
        <Screen style={screenStyle} isRounded={isRounded}>
          {children}
        </Screen>
        {absoluteChildren}
      </ScreenWrapper>
    </Layout>
  );
};

export default MobileSizedView;
