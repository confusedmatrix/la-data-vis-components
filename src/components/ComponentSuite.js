import React from 'react'
import _ from 'lodash'

import { Timeline } from './Timeline'
import MotivatorIcon from "./Motivators/Icons/MotivatorIcon"
import RecommendationIcon from './Recommendations/Icons/RecommendationIcon'
import MotivatorImage from './Motivators/DynamicImages/MotivatorDynamicImage'
import { Character, RandomCharacter } from './Character'
import Scene from './Themes/Personal/PersonalThemeScene'

// const careerMotivatorImage = <MotivatorImage motivator="career" score={2} headStyle="f1" />

export const ComponentSuite = () => (
    <div>
        {/* <Timeline numWeeks="12" /> */}

        {/*<MotivatorIcon motivator="attainment" />*/}
        {/*<MotivatorIcon motivator="career" />*/}
        {/*<MotivatorIcon motivator="family" />*/}
        {/*<MotivatorIcon motivator="fear-of-failure" />*/}
        {/*<MotivatorIcon motivator="mastery" />*/}
        {/*<MotivatorIcon motivator="money" />*/}
        {/*<MotivatorIcon motivator="options" />*/}
        {/*<MotivatorIcon motivator="professional-community" />*/}
        {/*<MotivatorIcon motivator="self-development" />*/}

        {/* <RecommendationIcon recommendation="attendance" />
        <RecommendationIcon recommendation="clicks" />
        <RecommendationIcon recommendation="collaboration" />
        <RecommendationIcon recommendation="coursework-clicks" />
        <RecommendationIcon recommendation="duration" />
        <RecommendationIcon recommendation="lecture-clicks" />
        <RecommendationIcon recommendation="practical-clicks" />
        <RecommendationIcon recommendation="suggested-reading" />
        <RecommendationIcon recommendation="weekly-frequency" /> */}

        {/* <svg height="500px" width="300px" viewBox="49 55 90 80" preserveAspectRatio="xMidYMax slice">
            <Character headStyle="f1" careerMotivatorImage={careerMotivatorImage} />
        </svg> */}
            
        <svg height="800px" width="480px" viewBox="51 58 90 80" preserveAspectRatio="xMidYMax slice">
            <RandomCharacter />
        </svg>
    

        {/*<MotivatorImage motivator="fear-of-failure" score={1} />*/}

        {/* <Scene 
            highlightedMotivator={'money'}
            highlightMotivator={console.log}
            clearHighlightedMotivator={console.log}
            motivators={[
                'attainment', 
                'mastery',
                'fear-of-failure', 
                'self-development', 
                'professional-community', 
                'family', 
                'money', 
                'career', 
                'options']} 
            scores={{
                'attainment': 1, 
                'mastery': 2,
                'fear-of-failure': 3, 
                'self-development': 4, 
                'professional-community': 5, 
                'family': 4, 
                'money': 3, 
                'career': 2, 
                'options': 1}} /> */}

    </div>
)

export default ComponentSuite
