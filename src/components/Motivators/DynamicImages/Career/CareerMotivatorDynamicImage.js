import React from 'react'

import CareerMotivatorDynamicImageFemaleSVG from '../svgs/femaledogtag.svg'
import CareerMotivatorDynamicImageMaleSVG from '../svgs/maledogtag.svg'
import './CareerMotivatorDynamicImage.scss'

const careers = [
    'Intern',
    'Executive',
    'Supervisor',
    'Manager',
    'CEO',
]

export const CareerMotivatorDynamicImage = ({ headStyle, score }) => {
    const text = careers[score - 1]
    const size = 1 / (text.length + 5) * 40
    const gender = headStyle.indexOf('f') > -1 ? 'f' : 'm'
    return (
        <svg id="career-motivator-image" className={`career-motivator-image-${gender}`}>
            { gender === 'f' ? <CareerMotivatorDynamicImageFemaleSVG /> : <CareerMotivatorDynamicImageMaleSVG />}
            <text style={{fontSize: size}}>{text}</text>
        </svg>
    )
}

export default CareerMotivatorDynamicImage
