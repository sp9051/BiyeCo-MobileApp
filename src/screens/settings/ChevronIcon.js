import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ChevronIcon = ({ color = "#9CA3AF", size = 9 }) => {
    return (
        <Svg width={size} height={size * 14 / 9} viewBox="0 0 9 14" fill="none">
            <Path
                d="M8.49307 6.38213C8.83486 6.72393 8.83486 7.279 8.49307 7.6208L3.24307 12.8708C2.90127 13.2126 2.34619 13.2126 2.00439 12.8708C1.6626 12.529 1.6626 11.9739 2.00439 11.6321L6.63643 7.0001L2.00713 2.36807C1.66533 2.02627 1.66533 1.47119 2.00713 1.12939C2.34893 0.787598 2.904 0.787598 3.2458 1.12939L8.4958 6.3794L8.49307 6.38213Z"
                fill={color}
            />
        </Svg>
    );
};

export default ChevronIcon;
