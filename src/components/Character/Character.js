import React from 'react'

import Head from './BodyParts/Head'
import Body from './BodyParts/Body'
import FreeArm from './BodyParts/FreeArm'

export const Character = ({
    bodyStyle="m2",
    headStyle="m2",
    armStyle="m2",
    hairColor=[0,0,255],
    skinColor=[100,60,20],
    clothingTopColor=[255,0,0],
    clothingBottomColor=[0,255,0],
    shoeColor=[255,0,255],
}) => (
    <svg id="character" height="180" width="180">
        <FreeArm
            armStyle={armStyle}
            skinColor={skinColor}
            clothingTopColor={clothingTopColor} />
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
    </svg>
)

export default Character