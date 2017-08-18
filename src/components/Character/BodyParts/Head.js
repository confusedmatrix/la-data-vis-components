import React from 'react'

import { colorValsToRGB, darken } from '../../../helpers'
import FemaleHead1SVG from '../svgs/femalehead1.svg'
import FemaleHead2SVG from '../svgs/femalehead2.svg'
import FemaleHead3SVG from '../svgs/femalehead3.svg'
import FemaleHead4SVG from '../svgs/femalehead4.svg'
import FemaleHead5SVG from '../svgs/femalehead5.svg'
import MaleHead1SVG from '../svgs/malehead1.svg'
import MaleHead2SVG from '../svgs/malehead2.svg'
import MaleHead3SVG from '../svgs/malehead3.svg'
import MaleHead4SVG from '../svgs/malehead4.svg'
import MaleHead5SVG from '../svgs/malehead5.svg'
import './Head.scss'

const headStyles = {
    'f1': <FemaleHead1SVG id="character-head" className="female-head-1" />,
    'f2': <FemaleHead2SVG id="character-head" className="female-head-2" />,
    'f3': <FemaleHead3SVG id="character-head" className="female-head-3" />,
    'f4': <FemaleHead4SVG id="character-head" className="female-head-4" />,
    'f5': <FemaleHead1SVG id="character-head" className="female-head-5" />,
    'm1': <MaleHead1SVG id="character-head" className="male-head-1" />,
    'm2': <MaleHead2SVG id="character-head" className="male-head-2" />,
    'm3': <MaleHead3SVG id="character-head" className="male-head-3" />,
    'm4': <MaleHead4SVG id="character-head" className="male-head-4" />,
    'm5': <MaleHead5SVG id="character-head" className="male-head-5" />,
}

export const HeadBackground = ({ hairColor }) => (
    <svg height="180" width="180">
        <style type="text/css">{`
            #character-head-background .hair {fill: ${colorValsToRGB(hairColor)} !important}
        `}</style>
        <FemaleHead5SVG id="character-head-background" className="female-head-background-5" />
    </svg>
)

export const Head = ({ headStyle, hairColor, skinColor }) => (
    <svg height="180" width="180">
        <style type="text/css">{`
            #character-head .skin-shadow {fill: ${colorValsToRGB(darken(skinColor))} !important}
            #character-head .skin {fill: ${colorValsToRGB(skinColor)} !important}
            #character-head .hair {fill: ${colorValsToRGB(hairColor)} !important}
        `}</style>
        { headStyles[headStyle] }
    </svg>
)

export default Head
