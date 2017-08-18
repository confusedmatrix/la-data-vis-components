import React from 'react'

import { HeadBackground, default as Head } from './BodyParts/Head'
import Body from './BodyParts/Body'
import FreeArm from './BodyParts/FreeArm'
import MotivatorImage from '../Motivators/DynamicImages/MotivatorDynamicImage'

export const Character = ({
    bodyStyle="f1",
    headStyle="f1",
    armStyle="f1",
    hairColor=[106,78,66],
    skinColor=[255,220,178],
    clothingTopColor=[155,42,57],
    clothingBottomColor=[141,165,135],
    shoeColor=[96,65,53],
    careerMotivatorScore=null,
    professionalCommunityMotivatorScore=null
}) => (
    <svg id="character" height="180" width="180">
        {headStyle === 'f5' ? <HeadBackground hairColor={hairColor} /> : null}
        <FreeArm
            armStyle={professionalCommunityMotivatorScore !== null ? armStyle.substr(0,1) + professionalCommunityMotivatorScore : armStyle}
            skinColor={skinColor}
            clothingTopColor={clothingTopColor} />}
        <Body
            bodyStyle={bodyStyle}
            skinColor={skinColor}
            clothingTopColor={clothingTopColor}
            clothingBottomColor={clothingBottomColor}
            shoeColor={shoeColor} />
        <Head
            headStyle={headStyle}
            hairColor={hairColor}
            skinColor={skinColor} />
        {careerMotivatorScore !== null ? <MotivatorImage motivator="career" score={careerMotivatorScore} headStyle={headStyle} /> : null}
    </svg>
)

export default Character