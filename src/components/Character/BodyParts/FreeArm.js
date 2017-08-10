import React from 'react'

import { colorValsToRGB } from '../../../helpers'
import FemaleArm1SVG from '../svgs/femalephone1.svg'
import FemaleArm2SVG from '../svgs/femalephone2.svg'
import FemaleArm3SVG from '../svgs/femalephone3.svg'
import FemaleArm4SVG from '../svgs/femalephone4.svg'
import FemaleArm5SVG from '../svgs/femalephone5.svg'
import MaleArm1SVG from '../svgs/phone1.svg'
import MaleArm2SVG from '../svgs/phone2.svg'
import MaleArm3SVG from '../svgs/phone3.svg'
import MaleArm4SVG from '../svgs/phone4.svg'
import MaleArm5SVG from '../svgs/phone5.svg'
import './FreeArm.scss'

const armStyles = {
    'f1': <FemaleArm1SVG id="character-free-arm" className="female-free-arm-1" />,
    'f2': <FemaleArm2SVG id="character-free-arm" className="female-free-arm-2" />,
    'f3': <FemaleArm3SVG id="character-free-arm" className="female-free-arm-3" />,
    'f4': <FemaleArm4SVG id="character-free-arm" className="female-free-arm-4" />,
    'f5': <FemaleArm5SVG id="character-free-arm" className="female-free-arm-5" />,
    'm1': <MaleArm1SVG id="character-free-arm" className="male-free-arm-1" />,
    'm2': <MaleArm2SVG id="character-free-arm" className="male-free-arm-2" />,
    'm3': <MaleArm3SVG id="character-free-arm" className="male-free-arm-3" />,
    'm4': <MaleArm4SVG id="character-free-arm" className="male-free-arm-4" />,
    'm5': <MaleArm5SVG id="character-free-arm" className="male-free-arm-5" />,
}

export const FreeArm = ({ armStyle, skinColor, clothingTopColor }) => (
    <svg>
        <style type="text/css">{`
            #character-free-arm .skin {fill: ${colorValsToRGB(skinColor)} !important}
            #character-free-arm .clothing-top {fill: ${colorValsToRGB(clothingTopColor)} !important}
        `}</style>
        { armStyles[armStyle] }
    </svg>
)

export default FreeArm
