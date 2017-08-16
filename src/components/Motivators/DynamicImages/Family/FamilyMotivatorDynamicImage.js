import React from 'react'

import FamilyMotivatorDynamicImage1SVG from '../svgs/house1.svg'
import FamilyMotivatorDynamicImage2SVG from '../svgs/house2.svg'
import FamilyMotivatorDynamicImage3SVG from '../svgs/house3.svg'
import FamilyMotivatorDynamicImage4SVG from '../svgs/house4.svg'
import FamilyMotivatorDynamicImage5SVG from '../svgs/house5.svg'

import './FamilyMotivatorDynamicImage.scss'

const motivatorMap = [
    <FamilyMotivatorDynamicImage1SVG id="family-motivator-image" className="family-motivator-image-1" />,
    <FamilyMotivatorDynamicImage2SVG id="family-motivator-image" className="family-motivator-image-2" />,
    <FamilyMotivatorDynamicImage3SVG id="family-motivator-image" className="family-motivator-image-3" />,
    <FamilyMotivatorDynamicImage4SVG id="family-motivator-image" className="family-motivator-image-4" />,
    <FamilyMotivatorDynamicImage5SVG id="family-motivator-image" className="family-motivator-image-5" />,
]

export const FamilyMotivatorDynamicImage = ({ score }) => (
    <svg height="400" width="400">
        {motivatorMap[score - 1]}
    </svg>
)

export default FamilyMotivatorDynamicImage
