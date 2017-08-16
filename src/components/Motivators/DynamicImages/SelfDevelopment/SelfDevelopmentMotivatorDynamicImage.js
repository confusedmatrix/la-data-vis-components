import React from 'react'

import SelfDevelopmentMotivatorDynamicImage1SVG from '../svgs/pan.svg'
import SelfDevelopmentMotivatorDynamicImage2SVG from '../svgs/spade.svg'
import SelfDevelopmentMotivatorDynamicImage3SVG from '../svgs/tennis.svg'
import SelfDevelopmentMotivatorDynamicImage4SVG from '../svgs/bike.svg'
import SelfDevelopmentMotivatorDynamicImage5SVG from '../svgs/surf.svg'
import './SelfDevelopmentMotivatorDynamicImage.scss'

export const SelfDevelopmentMotivatorDynamicImage = ({ score }) => (
    <svg id="self-development-motivator-image" height="150" width="400" viewBox="60 23 70 48">
        {score >= 1 ? <SelfDevelopmentMotivatorDynamicImage1SVG height="100" width="100" y="-1" className="self-development-motivator-image-1" /> : null}
        {score >= 2 ? <SelfDevelopmentMotivatorDynamicImage2SVG height="100" width="100" x="17" className="self-development-motivator-image-2" /> : null}
        {score >= 3 ? <SelfDevelopmentMotivatorDynamicImage3SVG height="100" width="100" x="30" className="self-development-motivator-image-3" /> : null}
        {score >= 4 ? <SelfDevelopmentMotivatorDynamicImage4SVG height="100" width="100" x="60" className="self-development-motivator-image-4" /> : null}
        {score >= 5 ? <SelfDevelopmentMotivatorDynamicImage5SVG height="100" width="100" x="90" className="self-development-motivator-image-5" /> : null}
    </svg>
)

export default SelfDevelopmentMotivatorDynamicImage