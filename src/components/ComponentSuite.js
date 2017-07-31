import React from 'react'

import { Timeline } from './Timeline'
import MotivatorIcon from "./Motivators/Icons/MotivatorIcon";

export const ComponentSuite = () => (
    <div>
        <Timeline numWeeks={12} />
        <MotivatorIcon motivator="money" />
    </div>
)

export default ComponentSuite
