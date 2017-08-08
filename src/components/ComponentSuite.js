import React from 'react'

import { Timeline } from './Timeline'
import MotivatorIcon from "./Motivators/Icons/MotivatorIcon";

export const ComponentSuite = () => (
    <div>
        <Timeline numWeeks={12} />
        <MotivatorIcon motivator="attainment" />
        <MotivatorIcon motivator="career" />
        <MotivatorIcon motivator="family" />
        <MotivatorIcon motivator="fear-of-failure" />
        <MotivatorIcon motivator="mastery" />
        <MotivatorIcon motivator="money" />
        <MotivatorIcon motivator="options" />
        <MotivatorIcon motivator="professional-community" />
        <MotivatorIcon motivator="self-development" />
    </div>
)

export default ComponentSuite
