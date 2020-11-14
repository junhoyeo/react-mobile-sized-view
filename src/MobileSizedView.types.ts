export interface ILayout {
  backgroundColor?: string;
}

export interface IScreen {
  screenBackgroundColor?: string;
  screenLightShadow?: string;
  screenDarkShadow?: string;
  isRounded?: boolean;
}

export default interface IMobileSizedView extends ILayout, IScreen {
  absoluteChildren?: React.ReactNode;
}
