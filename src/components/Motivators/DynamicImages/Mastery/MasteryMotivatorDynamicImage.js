import React from 'react'

import MasteryMotivatorDynamicImageSVG from '../svgs/books.svg'
import './MasteryMotivatorDynamicImage.scss'

export const MasteryMotivatorDynamicImage = ({ score }) => (
    <svg id="mastery-motivator-image" height="400" width="200" viewBox="31 13 39 25">
        {(() => {
            const images = []
            for (let i = 1; i <= score; i++) {
                images.push(<MasteryMotivatorDynamicImageSVG key={i} y={-((i-1)*13.5)} height="100" width="100" id="mastery-motivator-image" />)
            }
            return images
        })()}
    </svg>
)

export default  MasteryMotivatorDynamicImage
