import React from 'react'

import Head from './BodyParts/Head'
import Body from './BodyParts/Body'
import FreeArm from './BodyParts/FreeArm'

export const Character = ({
    bodyStyle="f1",
    headStyle="f1",
    armStyle="f1",
    hairColor=[106,78,66],
    skinColor=[255,220,178],
    clothingTopColor=[155,42,57],
    clothingBottomColor=[141,165,135],
    shoeColor=[96,65,53],
    careerMotivatorImage=null
}) => (
    <svg id="character" height="180" width="180">
        <FreeArm
            armStyle={armStyle}
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
        {careerMotivatorImage}
    </svg>
)

export default Character