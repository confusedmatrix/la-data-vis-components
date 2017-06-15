import React from 'react'

import AttainmentMotivatorDynamicImage from './AttainmentMotivatorDynamicImage'
import CareerMotivatorDynamicImage from './CareerMotivatorDynamicImage'
import FamilyMotivatorDynamicImage from './FamilyMotivatorDynamicImage'
import FearOfFailureMotivatorDynamicImage from './FearOfFailureMotivatorDynamicImage'
import MasteryMotivatorDynamicImage from './MasteryMotivatorDynamicImage'
import MoneyMotivatorDynamicImage from './MoneyMotivatorDynamicImage'
import OptionsMotivatorDynamicImage from './OptionsMotivatorDynamicImage'
import ProfessionalCommunityMotivatorDynamicImage from './ProfessionalCommunityMotivatorDynamicImage'
import SelfDevelopmentMotivatorDynamicImage from './SelfDevelopmentMotivatorDynamicImage'

const motivatorMap = {
    "attainment": AttainmentMotivatorDynamicImage,
    "career": CareerMotivatorDynamicImage,
    "family": FamilyMotivatorDynamicImage,
    "fear-of-failure": FearOfFailureMotivatorDynamicImage,
    "mastery": MasteryMotivatorDynamicImage,
    "money": MoneyMotivatorDynamicImage,
    "options": OptionsMotivatorDynamicImage,
    "professional-community": ProfessionalCommunityMotivatorDynamicImage,
    "self-development": SelfDevelopmentMotivatorDynamicImage,
}

export const MotivatorDynamicImage = ({ motivator, scale }) => {
    const component = motivatorMap[motivator]
    return ( <component scale={scale} /> )
}

export default MotivatorDynamicImage
