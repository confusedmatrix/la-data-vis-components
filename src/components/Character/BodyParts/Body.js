import React from 'react'

import { colorValsToRGB } from '../../../helpers'
import FemaleBody1SVG from '../svgs/femalebody1.svg'
import './Body.scss'

export const Body = ({ skinColor }) => (
    <svg>
        <style type="text/css">{`
            #character-body .st0{fill: ${colorValsToRGB(skinColor)} !important};
        `}</style>
        <FemaleBody1SVG id="character-body" />
    </svg>
)

export default Body
