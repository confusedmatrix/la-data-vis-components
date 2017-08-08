import React from 'react'

import './CareerMotivatorIcon.scss'
import CareerMotivatorSVG from './svg/career.svg'

export const CareerMotivatorIcon = ({ height, width }) => (
    <CareerMotivatorSVG
        className="career-motivator-icon"
        height={height}
        width={width} />
)

export default CareerMotivatorIcon
