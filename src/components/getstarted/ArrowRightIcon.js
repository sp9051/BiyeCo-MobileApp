import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowRightIcon = ({ size = 20, color = "currentColor" }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default ArrowRightIcon;
