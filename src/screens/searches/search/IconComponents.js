import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export const BackIcon = ({ size = 24, color = "#1a1a1a" }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M15 18l-6-6 6-6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const SearchIcon = ({ size = 20, color = "#9e9aa8" }) => (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Circle cx="9" cy="9" r="6" stroke={color} strokeWidth="2" />
        <Path
            d="M14 14l4 4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const FilterIcon = ({ size = 24, color = "#6c5ce7" }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 7h4M7 7a2 2 0 104 0 2 2 0 00-4 0zM11 7h10M3 17h10M13 17a2 2 0 104 0 2 2 0 00-4 0zM17 17h4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const ClockIcon = ({ size = 24, color = "#9e9aa8" }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="2"
        />
        <Path
            d="M12 8v4l3 3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const CloseIcon = ({ size = 18, color = "#9e9aa8" }) => (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
        <Path
            d="M13.5 4.5l-9 9M4.5 4.5l9 9"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);
