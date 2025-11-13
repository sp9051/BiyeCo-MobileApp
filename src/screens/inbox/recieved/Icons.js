import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

export const HamburgerIcon = () => (
    <View style={{ width: 24, height: 24, justifyContent: 'space-between' }}>
        <View style={{ width: 24, height: 3, backgroundColor: '#5a3e8f', borderRadius: 2 }} />
        <View style={{ width: 24, height: 3, backgroundColor: '#5a3e8f', borderRadius: 2 }} />
        <View style={{ width: 24, height: 3, backgroundColor: '#5a3e8f', borderRadius: 2 }} />
    </View>
);

export const FilterIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 7h4M3 12h8M3 17h4M14 7h7M14 12h7M14 17h7"
            stroke="#6c757d"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const UserIcon = () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="8" r="4" fill="#9b6fd9" />
        <Path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" fill="#9b6fd9" />
    </Svg>
);

export const VerifiedIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="10" fill="#5a3e8f" />
        <Path
            d="M7 12l3 3 7-7"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const HomeIcon = ({ active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
    </Svg>
);

export const HeartIcon = ({ active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
    </Svg>
);

export const InboxIcon = ({ active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M22 12h-6l-2 3h-4l-2-3H2"
            strokeWidth="2"
            fill="none"
            stroke={active ? "#5a3e8f" : "#6c757d"}
        />
        <Path
            d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
    </Svg>
);

export const ChatIcon = ({ active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
    </Svg>
);

export const VendorsIcon = ({ active = false }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Rect
            x="3"
            y="3"
            width="7"
            height="7"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
        <Rect
            x="14"
            y="3"
            width="7"
            height="7"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
        <Rect
            x="14"
            y="14"
            width="7"
            height="7"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
        <Rect
            x="3"
            y="14"
            width="7"
            height="7"
            strokeWidth="2"
            stroke={active ? "#5a3e8f" : "#6c757d"}
            fill={active ? "#5a3e8f" : "none"}
        />
    </Svg>
);

export const NotificationDot = () => (
    <View style={{
        position: 'absolute',
        top: -2,
        right: -2,
        width: 8,
        height: 8,
        backgroundColor: '#dc3545',
        borderRadius: 4,
    }} />
);
