import React from 'react'

import { HeadBackground, default as Head } from './BodyParts/Head'
import Body from './BodyParts/Body'
import FreeArm from './BodyParts/FreeArm'
import MotivatorImage from '../Motivators/DynamicImages/MotivatorDynamicImage'

export const RandomCharacter = ({ seed }) => {

    const randomiseCharacterProps = () => {
        const bodies = [
            'f1', 
            'f2', 
            'f3', 
            'm1', 
            'm2'
        ]
        const heads = [
            'f1', 
            'f2', 
            'f3', 
            'f4', 
            'f5', 
            'm1', 
            'm2', 
            'm3', 
            'm4', 
            'm5'
        ]
        const hairColours = [
            [9,8,6], // black
            [113,99,90], // dark gray
            [220,208,186], // bleach blonde
            [230,206,168], // light blonde
            [184,151,120], // honey blonde
            [181,82,57], // light red,
            [145,85,61], // light auburn
            [83,61,50], // dark auburn
            [106,78,66], // brown
            [167,133,106], // light brown
        ]
        const skinColours = [
            [255,223,196], // light
            [255,220,178],
            [225,184,153],
            [163,134,106],
            [165,114,87],
            [100,60,20], // dark
        ]
        const clothingTopColours = [
            [63,97,93], // dark green
            [141,165,135], // mid green
            // [193,213, 159], // light green
            [55,98,126], // dark blue
            [87,151,176], // mid blue
            // [151,192,231], // light blue
            // [155,79,73], // puse
            [203,147,110], // feldspar
            [155,42,57], // red
            [205,98,56], // orange
            [232,184,108], // sand
            [96,65,53], // brown
            // [182,118,71], // toffee
            // [222,201,144], // tan
            [33,33,33], // black
            [245,242,239], // white
        ]
        const clothingBottomColours = [
            [63,97,93], // dark green
            [141,165,135], // mid green
            // [193,213, 159], // light green
            [55,98,126], // dark blue
            [87,151,176], // mid blue
            // [151,192,231], // light blue
            // [155,79,73], // puse
            [203,147,110], // feldspar
            [155,42,57], // red
            [205,98,56], // orange
            [232,184,108], // sand
            [96,65,53], // brown
            // [182,118,71], // toffee
            // [222,201,144], // tan
            [33,33,33], // black
            [245,242,239], // white
        ]
        const shoeColours = [
            [96,65,53], // brown
            [33,33,33], // black
        ]

        const randomise = array => array[Math.floor(Math.random() * array.length)]

        const head = randomise(heads)
        const body = randomise(bodies.filter(body => body.substr(0,1) === head.substr(0, 1))) // ensure head gender matches body gender
        const characterProps = {
            bodyStyle: body,
            headStyle: head,
            hairColor: randomise(hairColours),
            skinColor: randomise(skinColours),
            clothingTopColor: randomise(clothingTopColours),
            clothingBottomColor: randomise(clothingBottomColours),
            shoeColor: randomise(shoeColours),
        }

        return characterProps
    }
    
    return (
        <Character {...randomiseCharacterProps()} />
    )
}

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
            style={{opacity: highlightedMotivator === null || highlightedMotivator === 'professional-community' ? 1 : 0.2}}
            onMouseEnter={() => highlightMotivator('professional-community')}
            onClick={() => highlightMotivator('professional-community')}
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
                style={{opacity: highlightedMotivator === null || highlightedMotivator === 'career' ? 1 : 0.2}}
                onMouseEnter={() => highlightMotivator('career')}
                onClick={() => highlightMotivator('career')}
                onMouseLeave={() => clearHighlightedMotivator('career')}>
                <MotivatorImage motivator="career" score={careerMotivatorScore} headStyle={headStyle} />
            </svg> : null}
    </svg>
)

export default Character