import React from 'react'

import Head from './BodyParts/Head'
import Body from './BodyParts/Body'
import FreeArm from './BodyParts/FreeArm'

export const Character = ({ hairColor, skinColor=[100,60,20] }) => (
    <svg id="character" viewBox="0 0 300 300">
        <Head hairColor={hairColor} skinColor={skinColor} />
        <FreeArm skinColor={skinColor} />
        <Body skinColor={skinColor} />
    </svg>
)

export default Character