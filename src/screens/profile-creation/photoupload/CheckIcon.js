import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CheckIcon = ({ color = "#53377A", size = 13 }) => {
    return (
        <Svg width={size} height={size + 1} viewBox="0 0 13 14" fill="none">
            <Path
                d="M11.995 2.88184C12.3368 3.22363 12.3368 3.77871 11.995 4.12051L4.99502 11.1205C4.65322 11.4623 4.09814 11.4623 3.75635 11.1205L0.256348 7.62051C-0.0854492 7.27871 -0.0854492 6.72363 0.256348 6.38184C0.598145 6.04004 1.15322 6.04004 1.49502 6.38184L4.37705 9.26113L10.7591 2.88184C11.1009 2.54004 11.656 2.54004 11.9978 2.88184H11.995Z"
                fill={color}
            />
        </Svg>
    );
};

export default CheckIcon;
