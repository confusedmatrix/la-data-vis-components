import React from 'react'

import AttainmentMotivatorDynamicImage from './Attainment/AttainmentMotivatorDynamicImage'
import CareerMotivatorDynamicImage from './Career/CareerMotivatorDynamicImage'
import FamilyMotivatorDynamicImage from './Family/FamilyMotivatorDynamicImage'
import FearOfFailureMotivatorDynamicImage from './FearOfFailure/FearOfFailureMotivatorDynamicImage'
import MasteryMotivatorDynamicImage from './Mastery/MasteryMotivatorDynamicImage'
import MoneyMotivatorDynamicImage from './Money/MoneyMotivatorDynamicImage'
import OptionsMotivatorDynamicImage from './Options/OptionsMotivatorDynamicImage'
import ProfessionalCommunityMotivatorDynamicImage from './ProfessionalCommunity/ProfessionalCommunityMotivatorDynamicImage'
import SelfDevelopmentMotivatorDynamicImage from './SelfDevelopment/SelfDevelopmentMotivatorDynamicImage'

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

export const MotivatorDynamicImage = (props) => {
    const Component = motivatorMap[props.motivator]
    return <Component {...props} />
}

export default MotivatorDynamicImage
