import React from 'react'

import { colorValsToRGB } from '../../../helpers'
import FemaleArm1SVG from '../svgs/femalephone1.svg'
import './FreeArm.scss'

export const FreeArm = ({ skinColor }) => (
    <svg>
        <style type="text/css">{`
            #character-free-arm .st0{fill: ${colorValsToRGB(skinColor)} !important};
        `}</style>
        <FemaleArm1SVG id="character-free-arm" />
    </svg>
)

export default FreeArm
