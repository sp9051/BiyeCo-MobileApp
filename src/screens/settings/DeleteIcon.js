import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DeleteIcon = ({ color = "#8A5EBC", size = 16 }) => {
    return (
        <Svg width={size} height={size * 18 / 16} viewBox="0 0 16 18" fill="none">
            <Path
                d="M4.75312 0.622266L4.5 1.125H1.125C0.502734 1.125 0 1.62773 0 2.25C0 2.87227 0.502734 3.375 1.125 3.375H14.625C15.2473 3.375 15.75 2.87227 15.75 2.25C15.75 1.62773 15.2473 1.125 14.625 1.125H11.25L10.9969 0.622266C10.807 0.239063 10.4168 0 9.99141 0H5.75859C5.3332 0 4.94297 0.239063 4.75312 0.622266ZM14.625 4.5H1.125L1.87031 16.418C1.92656 17.3074 2.66484 18 3.5543 18H12.1957C13.0852 18 13.8234 17.3074 13.8797 16.418L14.625 4.5Z"
                fill={color}
            />
        </Svg>
    );
};

export default DeleteIcon;
