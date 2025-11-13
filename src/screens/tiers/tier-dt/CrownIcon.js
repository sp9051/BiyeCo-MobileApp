import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const CrownIcon = ({ width = 48, height = 48, color = "white" }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
            <Path
                d="M8 18L14 32H34L40 18L32 22L24 12L16 22L8 18Z"
                fill={color}
            />
            <Circle cx="24" cy="12" r="2" fill={color} />
            <Circle cx="16" cy="22" r="2" fill={color} />
            <Circle cx="32" cy="22" r="2" fill={color} />
        </Svg>
    );
};

export default CrownIcon;
