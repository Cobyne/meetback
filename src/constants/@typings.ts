export enum Stage {
  ALPHA = 'alpha',
  PROD = 'prod',
  LOCALHOST = 'localhost',
}

export interface IConf {
  STAGE: Stage
}

type Roundness = number

export const roundness: Roundness = 1.8

export enum ColorType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export enum ColorTint {
  DEFAULT = 'default',
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Spacing {
  XXS = 0.125,
  XS = 0.25,
  S = 0.5,
  M = 1,
  L = 2,
  XL = 4,
  XXL = 6,
}

export interface ColorPalet {
  white: string
  black: string
}
