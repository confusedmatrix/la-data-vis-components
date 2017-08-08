import React from 'react'

import AttainmentMotivatorIcon from './AttainmentMotivatorIcon'
import CareerMotivatorIcon from './CareerMotivatorIcon'
import FamilyMotivatorIcon from './FamilyMotivatorIcon'
import FearOfFailureMotivatorIcon from './FearOfFailureMotivatorIcon'
import MasteryMotivatorIcon from './MasteryMotivatorIcon'
import MoneyMotivatorIcon from './MoneyMotivatorIcon'
import OptionsMotivatorIcon from './OptionsMotivatorIcon'
import ProfessionalCommunityMotivatorIcon from './ProfessionalCommunityMotivatorIcon'
import SelfDevelopmentMotivatorIcon from './SelfDevelopmentMotivatorIcon'

const motivatorMap = {
    "attainment": AttainmentMotivatorIcon,
    "career": CareerMotivatorIcon,
    "family": FamilyMotivatorIcon,
    "fear-of-failure": FearOfFailureMotivatorIcon,
    "mastery": MasteryMotivatorIcon,
    "money": MoneyMotivatorIcon,
    "options": OptionsMotivatorIcon,
    "professional-community": ProfessionalCommunityMotivatorIcon,
    "self-development": SelfDevelopmentMotivatorIcon,
}

const sizes = {
    "small": {
        height: "80px",
        width: "80px",
    },
    "medium": {
        height: "120px",
        width: "120px",
    },
    "large": {
        height: "160px",
        width: "160px",
    },
}

export const MotivatorIcon = ({ motivator, size }) => {
    const Component = motivatorMap[motivator]
    const { height, width } = size ? sizes[size] : sizes['medium']
    return <Component height={height} width={width} />
}

export default MotivatorIcon
