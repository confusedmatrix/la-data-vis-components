import React from 'react'

import AttendanceRecommendationIcon from './AttendanceRecommendationIcon'
import ClicksRecommendationIcon from './ClicksRecommendationIcon'
import CollaborationRecommendationIcon from './CollaborationRecommendationIcon'
import CourseworkClicksRecommendationIcon from './CourseworkClicksRecommendationIcon'
import DurationRecommendationIcon from './DurationRecommendationIcon'
import LectureClicksRecommendationIcon from './LectureClicksRecommendationIcon'
import PracticalClicksRecommendationIcon from './PracticalClicksRecommendationIcon'
import SuggestedReadingRecommendationIcon from './SuggestedReadingRecommendationIcon'
import WeeklyFrequencyRecommendationIcon from './WeeklyFrequencyRecommendationIcon'

import './RecommendationIcon.scss'

const recommendationMap = {
    "attendance": AttendanceRecommendationIcon,
    "clicks": ClicksRecommendationIcon,
    "collaboration": CollaborationRecommendationIcon,
    "coursework-clicks": CourseworkClicksRecommendationIcon,
    "duration": DurationRecommendationIcon,
    "lecture-clicks": LectureClicksRecommendationIcon,
    "practical-clicks": PracticalClicksRecommendationIcon,
    "suggested-reading": SuggestedReadingRecommendationIcon,
    "weekly-frequency": WeeklyFrequencyRecommendationIcon,
}

const sizes = {
    "xsmall": {
        height: "40px",
        width: "40px",
    },
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

export const RecommendationIcon = ({ recommendation, size }) => {
    const Component = recommendationMap[recommendation]
    const { height, width } = size ? sizes[size] : sizes['medium']
    return <Component height={height} width={width} />
}

export default RecommendationIcon
