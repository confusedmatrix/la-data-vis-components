import React from 'react'

import FearOfFailureMotivatorDynamicImage1SVG from '../svgs/trapdoor1.svg'
import FearOfFailureMotivatorDynamicImage2SVG from '../svgs/trapdoor2.svg'
import FearOfFailureMotivatorDynamicImage3SVG from '../svgs/trapdoor3.svg'
import FearOfFailureMotivatorDynamicImage4SVG from '../svgs/trapdoor4.svg'
import FearOfFailureMotivatorDynamicImage5SVG from '../svgs/trapdoor5.svg'
import './FearOfFailureMotivatorDynamicImage.scss'

const motivatorMap = [
    <FearOfFailureMotivatorDynamicImage1SVG id="fear-of-failure-motivator-image" className="fear-of-failure-motivator-image-1" />,
    <FearOfFailureMotivatorDynamicImage2SVG id="fear-of-failure-motivator-image" className="fear-of-failure-motivator-image-2" />,
    <FearOfFailureMotivatorDynamicImage3SVG id="fear-of-failure-motivator-image" className="fear-of-failure-motivator-image-3" />,
    <FearOfFailureMotivatorDynamicImage4SVG id="fear-of-failure-motivator-image" className="fear-of-failure-motivator-image-4" />,
    <FearOfFailureMotivatorDynamicImage5SVG id="fear-of-failure-motivator-image" className="fear-of-failure-motivator-image-5" />,
]

export const FearOfFailureMotivatorDynamicImage = ({ score }) => (
    <svg height="400" width="400">
        {motivatorMap[score-1]}
    </svg>
)

export default FearOfFailureMotivatorDynamicImage
