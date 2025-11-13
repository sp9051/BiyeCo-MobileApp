import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';

export const HamburgerIcon = () => (
    <View style={{ width: 24, height: 24, justifyContent: 'space-between' }}>
        <View style={{ width: '100%', height: 3, backgroundColor: '#6c3fb5', borderRadius: 2 }} />
        <View style={{ width: '100%', height: 3, backgroundColor: '#6c3fb5', borderRadius: 2 }} />
        <View style={{ width: '100%', height: 3, backgroundColor: '#6c3fb5', borderRadius: 2 }} />
    </View>
);

export const FilterIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Line x1="2" y1="5" x2="18" y2="5" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" />
        <Line x1="2" y1="10" x2="18" y2="10" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" />
        <Line x1="2" y1="15" x2="18" y2="15" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" />
        <Circle cx="16" cy="5" r="2" fill="#6c3fb5" />
        <Circle cx="4" cy="10" r="2" fill="#6c3fb5" />
        <Circle cx="16" cy="15" r="2" fill="#6c3fb5" />
    </Svg>
);

export const UserIcon = () => (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <Circle cx="20" cy="14" r="6" fill="#a855f7" />
        <Path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#a855f7" />
    </Svg>
);

export const VerifiedIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Circle cx="10" cy="10" r="10" fill="#6c3fb5" />
        <Path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export const HomeIcon = ({ color = "#6c757d" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const HeartIcon = ({ color = "#6c757d" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const MailIcon = ({ color = "#6c757d" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const ChatIcon = ({ color = "#6c757d" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const ShoppingIcon = ({ color = "#6c757d" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);
