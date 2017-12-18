import React from 'react'

import { HeadBackground, default as Head } from './BodyParts/Head'
import Body from './BodyParts/Body'
import FreeArm from './BodyParts/FreeArm'
import MotivatorImage from '../Motivators/DynamicImages/MotivatorDynamicImage'

export const Character = ({
    bodyStyle="f1",
    headStyle="f1",
    hairColor=[106,78,66],
    skinColor=[255,220,178],
    clothingTopColor=[155,42,57],
    clothingBottomColor=[141,165,135],
    shoeColor=[96,65,53],
    careerMotivatorScore=null,
    highlightMotivator,
    clearHighlightedMotivator,
    professionalCommunityMotivatorScore=null,
    highlightedMotivator=null,
}) => (
    <svg id="character" height="180" width="180">
        {headStyle === 'f5' ? <HeadBackground hairColor={hairColor} /> : null}
        <svg 
            style={{opacity: highlightedMotivator === null || highlightedMotivator === 'professional-community' ? 1 : 0.6}}
            onMouseEnter={() => highlightMotivator('professional-community')}
            onMouseLeave={() => clearHighlightedMotivator('professional-community')}>
            <FreeArm
                armStyle={professionalCommunityMotivatorScore !== null ? bodyStyle.substr(0,1) + professionalCommunityMotivatorScore : `${bodyStyle.substr(0,1)}1`}
                skinColor={skinColor}
                clothingTopColor={clothingTopColor} />}
        </svg>
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
        {careerMotivatorScore !== null ? 
            <svg 
                style={{opacity: highlightedMotivator === null || highlightedMotivator === 'career' ? 1 : 0.6}}
                onMouseEnter={() => highlightMotivator('career')}
                onMouseLeave={() => clearHighlightedMotivator('career')}>
                <MotivatorImage motivator="career" score={careerMotivatorScore} headStyle={headStyle} />
            </svg> : null}
    </svg>
)

export default Character