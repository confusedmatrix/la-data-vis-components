import React from 'react'

import { colorValsToRGB } from '../../../helpers'
import FemaleBody1SVG from '../svgs/femalebody1.svg'
import FemaleBody2SVG from '../svgs/femalebody2.svg'
import FemaleBody3SVG from '../svgs/femalebody3.svg'
import MaleBody1SVG from '../svgs/malebody1.svg'
import MaleBody2SVG from '../svgs/malebody2.svg'
import './Body.scss'

const bodyStyles = {
    "f1": <FemaleBody1SVG id="character-body" className="female-body-1" />,
    "f2": <FemaleBody2SVG id="character-body" className="female-body-2" />,
    "f3": <FemaleBody3SVG id="character-body" className="female-body-3" />,
    "m1": <MaleBody1SVG id="character-body" className="male-body-1" />,
    "m2": <MaleBody2SVG id="character-body" className="male-body-2" />,
}

export const Body = ({ bodyStyle, skinColor, clothingTopColor, clothingBottomColor, shoeColor }) => (
    <svg height="180" width="180">
        <style type="text/css">{`
            #character-body .skin {fill: ${colorValsToRGB(skinColor)} !important}
            #character-body .legs {stroke: ${colorValsToRGB(skinColor)} !important}
            #character-body .clothing-top {fill: ${colorValsToRGB(clothingTopColor)} !important}
            #character-body .clothing-bottom {fill: ${colorValsToRGB(clothingBottomColor)} !important}
            #character-body .shoes {fill: ${colorValsToRGB(shoeColor)} !important}
        `}</style>
        { bodyStyles[bodyStyle] }
    </svg>
)

export default Body
