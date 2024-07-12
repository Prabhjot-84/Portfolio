import React from 'react';

const ProgressBar = ({ progress }) => {
    const outerStrokeWidth = 10; // Outer circle width
    const innerStrokeWidth = 8; // Inner circle width (adjust as needed)
    const radius = 50;
    const normalizedRadius = radius - outerStrokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            className="mx-auto"
        >
            {/* Background Circle */}
            <circle
                stroke="#131842"
                fill="transparent"
                strokeWidth={outerStrokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            {/* Progress Circle */}
            <circle
                stroke="#FFB200"
                fill="transparent"
                strokeWidth={innerStrokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius - (outerStrokeWidth - innerStrokeWidth) / 2} // Adjust radius to ensure inner circle fits inside outer circle
                cx={radius}
                cy={radius}
                strokeLinecap="round"
                transform={`rotate(-90 ${radius} ${radius})`}
            />
            {/* Progress Text */}
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#131842"
                fontSize="20px"
                fontWeight="bold"
            >
                {progress}%
            </text>
        </svg>
    );
};

export default ProgressBar;
