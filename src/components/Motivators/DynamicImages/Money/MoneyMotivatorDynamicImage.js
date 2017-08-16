import React from 'react'

import MoneyMotivatorDynamicImage1SVG from '../svgs/car1.svg'
import MoneyMotivatorDynamicImage2SVG from '../svgs/car2.svg'
import MoneyMotivatorDynamicImage3SVG from '../svgs/car3.svg'
import MoneyMotivatorDynamicImage4SVG from '../svgs/car4.svg'
import MoneyMotivatorDynamicImage5SVG from '../svgs/car5.svg'
import './MoneyMotivatorDynamicImage.scss'

const motivatorMap = [
    <MoneyMotivatorDynamicImage1SVG id="money-motivator-image" className="money-motivator-image-1" height="180" width="180" />,
    <MoneyMotivatorDynamicImage2SVG id="money-motivator-image" className="money-motivator-image-2" height="180" width="180" />,
    <MoneyMotivatorDynamicImage3SVG id="money-motivator-image" className="money-motivator-image-3" height="180" width="180" />,
    <MoneyMotivatorDynamicImage4SVG id="money-motivator-image" className="money-motivator-image-4" height="180" width="180" />,
    <MoneyMotivatorDynamicImage5SVG id="money-motivator-image" className="money-motivator-image-5" height="180" width="180" />,
]

export const MoneyMotivatorDynamicImage = ({ score }) => (
    <svg height="200" width="400" viewBox="32 50 131 66">
        {motivatorMap[score-1]}
    </svg>
)

export default MoneyMotivatorDynamicImage
