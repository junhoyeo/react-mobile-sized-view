import React from 'react';

export interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  screenStyle?: React.CSSProperties;
  screenWrapperStyle?: React.CSSProperties;
}

export interface IScreen {
  isRounded?: boolean;
}

export default interface IMobileSizedView extends ILayout, IScreen {
  absoluteChildren?: React.ReactNode;
}
