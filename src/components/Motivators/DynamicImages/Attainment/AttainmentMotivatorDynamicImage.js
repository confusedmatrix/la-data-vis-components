import React from 'react'

import AttainmentMotivatorDynamicImageSVG from '../svgs/sun.svg'
import './AttainmentMotivatorDynamicImage.scss'

const grades = [
    'FAIL',
    '3rd',
    '2:2',
    '2:1',
    '1st',
]

export const AttainmentMotivatorDynamicImage = ({ score }) => (
    <svg id="attainment-motivator-image" height="200" width="200" viewBox="34 32 35 28">
        <AttainmentMotivatorDynamicImageSVG height="100" width="100"/>
        <text x="50.8" y="48.5">{grades[score - 1]}</text>
    </svg>
)

export default AttainmentMotivatorDynamicImage
