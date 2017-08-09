import Color from 'color'

export const darken = rgbArray => Color.rgb(rgbArray).darken(0.2).rgb().array()
export const colorValsToRGB = rgbArray => Color.rgb(rgbArray).string()
