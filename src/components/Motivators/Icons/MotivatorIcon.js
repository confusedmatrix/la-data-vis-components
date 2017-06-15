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

export const MotivatorIcon = ({ motivator, size }) => {
    const component = motivatorMap[motivator]
    return ( <component /> )
}

export default MotivatorIcon
