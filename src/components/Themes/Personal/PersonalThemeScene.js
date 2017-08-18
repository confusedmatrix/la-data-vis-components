import React from 'react'

import Sky from './svgs/sky.svg'
import Grass from './svgs/grass.svg'
import MotivatorImage from '../../Motivators/DynamicImages/MotivatorDynamicImage'
import Character from '../../Character/Character'

import './PersonalThemeScene.scss'

const SCORE_DEFAULTS = {
    'attainment': 4,
    'career': 2,
    'family': 3,
    'fear-of-failure': 3,
    'mastery': 5,
    'money': 5,
    'options': 5,
    'professional-community': 5,
    'self-development': 5,
}

export const PersonalThemeScene = ({ scores=SCORE_DEFAULTS, motivators=[], character }) => {
    return (
        <svg id="personal-theme-scene" viewBox="60 130 670 370">
            <svg height="600" width="800">
                <defs>
                    <clipPath id="skyPath">
                        <path transform="translate(100) scale(3.335)" d="M154.4,84.5c1-2.5,1.5-5.3,1.5-8.2c0-12.7-10.3-23.1-23.1-23.1c-3.5,0-6.8,0.8-9.7,2.2
        c-3.8-7.5-11.6-12.6-20.6-12.6c-5.9,0-11.2,2.2-15.3,5.8c-4.2-5.3-10.6-8.8-17.9-8.8c-9.6,0-17.9,6-21.2,14.5
        c-1.8-1-3.9-1.6-6.1-1.6c-6.8,0-12.4,5.5-12.4,12.4c0,0.9,0.1,1.8,0.3,2.7c-9.3,4.9-15.7,14.7-15.7,26c0,16.2,13.2,29.4,29.4,29.4
        c8.9,0,16.8-3.9,22.2-10.2c4.2,4,9.8,6.5,16,6.5c4.2,0,8.2-1.1,11.6-3.1c3.8,7.4,11.6,12.4,20.5,12.4c6.2,0,11.8-2.4,15.9-6.4
        c4.2,4.2,10,6.8,16.4,6.8c12.7,0,23.1-10.3,23.1-23.1C169.5,96.2,163.2,87.7,154.4,84.5z"/>
                    </clipPath>
                </defs>

                <Sky className="sky" />
                <Grass className="grass" />

                {motivators.includes('attainment') ?
                    <svg x="268" y="143" viewBox="0 0 900 900">
                        <MotivatorImage motivator="attainment" score={scores['attainment']} />
                    </svg>
                    : null}

                {motivators.includes('options') ?
                    <g style={{clipPath:"url(#skyPath)"}}>
                        <svg x="0" y="188" viewBox="143 0 193 465">
                            <MotivatorImage motivator="options" score={scores['options']} />
                        </svg>
                    </g>
                    : null}

                {motivators.includes('family') ?
                    <svg x="10" y="121" viewBox="0 0 770 770">
                        <MotivatorImage motivator="family" score={scores['family']} />
                    </svg>
                    : null}

                {motivators.includes('fear-of-failure') ?
                    <svg x="-30" y="350" viewBox="0 0 1200 1600">
                        <MotivatorImage motivator="fear-of-failure" score={scores['fear-of-failure']}/>
                    </svg>
                    : null}

                {motivators.includes('mastery') ?
                    <svg x="80" y="40" viewBox="0 0 1200 600">
                        <MotivatorImage motivator="mastery" score={scores['mastery']} />
                    </svg>
                    : null}

                <svg x="-60" viewBox="0 0 180 180">
                    <Character
                        {...character}
                        careerMotivatorScore={motivators.includes('career') ? scores['career'] : null}
                        professionalCommunityMotivatorScore={motivators.includes('professional-community') ? scores['professional-community']: null} />
                </svg>

                {motivators.includes('money')?
                    <svg x="90" y="300" viewBox="0 0 290 570">
                        <MotivatorImage motivator="money" score={scores['money']}/>
                    </svg>
                    : null}

                {motivators.includes('self-development') ?
                    <svg x="40" y="360">
                        <MotivatorImage motivator="self-development" score={scores['self-development']} />
                    </svg>
                    : null}
            </svg>
        </svg>
    )
}

export default PersonalThemeScene