import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export const MenuIcon = ({ color = "#5B3A8F" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 6h18M3 12h18M3 18h18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const SearchIcon = ({ color = "#6b6b6b" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" />
        <Path
            d="M16 16l4 4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const MoreIcon = ({ color = "#6b6b6b" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="6" r="1.5" fill={color} />
        <Circle cx="12" cy="12" r="1.5" fill={color} />
        <Circle cx="12" cy="18" r="1.5" fill={color} />
    </Svg>
);

export const UserIcon = ({ color = "#ffffff" }) => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="8" r="4" fill={color} />
        <Path
            d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const DoubleCheckIcon = ({ color = "#5B9BD5" }) => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <Path
            d="M2 8l3 3 7-7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6 8l3 3 7-7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const SingleCheckIcon = ({ color = "#999999" }) => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <Path
            d="M3 8l3 3 7-7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const StarIcon = ({ color = "#FFD700" }) => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <Path
            d="M12 2L15 9h7l-5.5 4.5L19 22l-7-5.5L5 22l2.5-8.5L2 9h7l3-7z"
            fill={color}
        />
    </Svg>
);

export const HomeIcon = ({ color = "#999999", active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={active ? "#5B3A8F" : color}
        />
    </Svg>
);

export const HeartIcon = ({ color = "#999999", active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            fill={active ? "#5B3A8F" : color}
        />
    </Svg>
);

export const InboxIcon = ({ color = "#999999", active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M22 12h-6l-2 3h-4l-2-3H2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={active ? "#5B3A8F" : color}
        />
        <Path
            d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={active ? "#5B3A8F" : color}
        />
    </Svg>
);

export const ChatIcon = ({ color = "#999999", active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
            fill={active ? "#5B3A8F" : color}
        />
    </Svg>
);

export const VendorsIcon = ({ color = "#999999", active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={active ? "#5B3A8F" : color}
        />
        <Path
            d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2-2v2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={active ? "#5B3A8F" : color}
        />
    </Svg>
);
