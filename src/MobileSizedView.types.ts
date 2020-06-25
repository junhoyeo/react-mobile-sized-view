export interface ILayout {
  backgroundColor?: string;
}

export interface IScreen {
  screenBackgroundColor?: string;
  screenLightShadow?: string;
  screenDarkShadow?: string;
}

export default interface IMobileSizedView extends ILayout, IScreen {}
