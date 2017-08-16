import React from 'react'

import OptionsMotivatorDynamicImage1SVG from '../svgs/retailpark.svg'
import OptionsMotivatorDynamicImage2SVG from '../svgs/industrial.svg'
import OptionsMotivatorDynamicImage3SVG from '../svgs/london.svg'
import OptionsMotivatorDynamicImage4SVG from '../svgs/sanfran.svg'
import OptionsMotivatorDynamicImage5SVG from '../svgs/airport.svg'
import './OptionsMotivatorDynamicImage.scss'

const motivatorMap = [
    <OptionsMotivatorDynamicImage1SVG id="options-motivator-image" className="options-motivator-image-1" height="180" width="180" />,
    <OptionsMotivatorDynamicImage2SVG id="options-motivator-image" className="options-motivator-image-2" height="180" width="180" />,
    <OptionsMotivatorDynamicImage3SVG id="options-motivator-image" className="options-motivator-image-3" height="180" width="180" />,
    <OptionsMotivatorDynamicImage4SVG id="options-motivator-image" className="options-motivator-image-4" height="180" width="180" />,
    <OptionsMotivatorDynamicImage5SVG id="options-motivator-image" className="options-motivator-image-5" height="180" width="180" />,
]

export const OptionsMotivatorDynamicImage = ({ score }) => (
    <svg height="150" width="500" viewBox="13 47 156 60">
        {motivatorMap[score - 1]}
    </svg>
)

export default OptionsMotivatorDynamicImage
