import _ from 'lodash'
import React from 'react'

export const Timeline = ({ numWeeks }) => {
    const height = 100, width = 1000
    const margin = 15
    const segmentHeight = 10
    const segmentWidth = (width - 2 * margin) / (numWeeks - 1)
    const segments = _.range(numWeeks + 1).map(i => {
        const x = margin + segmentWidth * i
        const y = height - margin
        return (
            <g key={`segment_${i}`}>
                <text x={x}
                      y={y-segmentHeight-(margin/2)}
                      style={{textAnchor: "middle"}}>{i + 1}</text>
                <line x1={x}
                      y1={y}
                      x2={x}
                      y2={y - segmentHeight} />
            </g>
        )
    })

    return (
        <svg id="timeline" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
            <line key="axis"
                  x1={margin}
                  y1={height - margin}
                  x2={width - margin}
                  y2={height - margin} />
            {segments}
        </svg>
    )
}

export default Timeline