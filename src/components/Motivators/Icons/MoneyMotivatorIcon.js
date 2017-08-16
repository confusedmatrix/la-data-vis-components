import React from 'react'

import './MoneyMotivatorIcon.scss'
import MoneyMotivatorSVG from './svgs/money.svg'

export const MoneyMotivatorIcon = ({ height, width }) => (
    <MoneyMotivatorSVG
        className="money-motivator-icon"
        height={height}
        width={width} />
)

export default MoneyMotivatorIcon
