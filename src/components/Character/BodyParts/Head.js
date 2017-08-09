import React from 'react'

import { colorValsToRGB, darken } from '../../../helpers'
import FemaleHead1SVG from '../svgs/femalehead1.svg'
import './Head.scss'

export const Head = ({ hairColor, skinColor }) => (
    <svg>
        <style type="text/css">{`
            #character-head .st0{fill: ${colorValsToRGB(darken(skinColor))}}
            #character-head .st1{fill: ${colorValsToRGB(skinColor)}}
        `}</style>
        <FemaleHead1SVG id="character-head" />
    </svg>
)

export default Head
