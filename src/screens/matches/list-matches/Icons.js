import React from 'react';
import { View } from 'react-native';

export const HamburgerIcon = ({ color = "#5a3d7a", size = 24 }) => (
    <View style={{ width: size, height: size, flexDirection: 'column', gap: 4 }}>
        <View style={{ width: size, height: 3, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: size, height: 3, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: size, height: 3, backgroundColor: color, borderRadius: 2 }} />
    </View>
);

export const SearchIcon = ({ color = "#5a3d7a", size = 24 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            borderWidth: 2,
            borderColor: color,
            position: 'absolute',
            top: 2,
            left: 2
        }} />
        <View style={{
            width: 8,
            height: 2,
            backgroundColor: color,
            position: 'absolute',
            bottom: 2,
            right: 2,
            transform: [{ rotate: '45deg' }]
        }} />
    </View>
);

export const NotificationIcon = ({ color = "#5a3d7a", size = 24, showBadge = true }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size - 4,
            height: size - 2,
            backgroundColor: color,
            borderRadius: 4,
            position: 'absolute',
            top: 2,
            left: 2
        }} />
        {showBadge && (
            <View style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 10,
                height: 10,
                backgroundColor: '#ef4444',
                borderRadius: 5,
                borderWidth: 2,
                borderColor: '#ffffff'
            }} />
        )}
    </View>
);

export const CheckIcon = ({ color = "#ffffff", size = 24 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size,
            height: size,
            backgroundColor: '#7c3aed',
            borderRadius: size / 2
        }} />
        <View style={{
            position: 'absolute',
            top: size * 0.3,
            left: size * 0.25,
            width: size * 0.2,
            height: size * 0.4,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderColor: color,
            transform: [{ rotate: '45deg' }]
        }} />
    </View>
);

export const MoreIcon = ({ color = "#9ca3af", size = 24 }) => (
    <View style={{ width: size, height: size, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{ width: 4, height: 4, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: 4, height: 4, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: 4, height: 4, backgroundColor: color, borderRadius: 2 }} />
    </View>
);

export const EducationIcon = ({ color = "#5a3d7a", size = 20 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            position: 'absolute',
            bottom: 0,
            left: size * 0.1
        }} />
        <View style={{
            width: size * 0.6,
            height: size * 0.3,
            backgroundColor: color,
            position: 'absolute',
            top: 0,
            left: size * 0.2
        }} />
    </View>
);

export const HeartIcon = ({ color = "#5a3d7a", size = 20 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.4,
            height: size * 0.4,
            backgroundColor: color,
            borderRadius: size * 0.2,
            position: 'absolute',
            top: size * 0.1,
            left: size * 0.1
        }} />
        <View style={{
            width: size * 0.4,
            height: size * 0.4,
            backgroundColor: color,
            borderRadius: size * 0.2,
            position: 'absolute',
            top: size * 0.1,
            right: size * 0.1
        }} />
        <View style={{
            width: size * 0.6,
            height: size * 0.6,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
            position: 'absolute',
            bottom: size * 0.1,
            left: size * 0.2
        }} />
    </View>
);

export const LocationIcon = ({ color = "#5a3d7a", size = 20 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.7,
            height: size * 0.8,
            backgroundColor: color,
            borderRadius: size * 0.35,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            position: 'absolute',
            top: 0,
            left: size * 0.15
        }} />
        <View style={{
            width: size * 0.3,
            height: size * 0.3,
            backgroundColor: '#ffffff',
            borderRadius: size * 0.15,
            position: 'absolute',
            top: size * 0.2,
            left: size * 0.35
        }} />
    </View>
);

export const HomeIcon = ({ color = "#9ca3af", size = 24 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            position: 'absolute',
            bottom: 0,
            left: size * 0.1
        }} />
        <View style={{
            width: size * 0.6,
            height: size * 0.4,
            backgroundColor: color,
            position: 'absolute',
            top: size * 0.2,
            left: size * 0.2
        }} />
        <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: size * 0.4,
            borderRightWidth: size * 0.4,
            borderBottomWidth: size * 0.3,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: color,
            position: 'absolute',
            top: 0,
            left: size * 0.1
        }} />
    </View>
);

export const InboxIcon = ({ color = "#9ca3af", size = 24 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.9,
            height: size * 0.7,
            backgroundColor: color,
            borderRadius: 2,
            position: 'absolute',
            top: size * 0.15,
            left: size * 0.05
        }} />
        <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: size * 0.3,
            borderRightWidth: size * 0.3,
            borderTopWidth: size * 0.2,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: color,
            position: 'absolute',
            top: size * 0.35,
            left: size * 0.15
        }} />
    </View>
);

export const ChatIcon = ({ color = "#9ca3af", size = 24, showBadge = true }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            borderRadius: 4,
            position: 'absolute',
            top: size * 0.1,
            left: size * 0.1
        }} />
        <View style={{
            width: 0,
            height: 0,
            borderTopWidth: size * 0.15,
            borderRightWidth: size * 0.15,
            borderTopColor: color,
            borderRightColor: 'transparent',
            position: 'absolute',
            bottom: size * 0.2,
            left: size * 0.2
        }} />
        {showBadge && (
            <View style={{
                position: 'absolute',
                top: -2,
                right: 8,
                width: 8,
                height: 8,
                backgroundColor: '#ef4444',
                borderRadius: 4
            }} />
        )}
    </View>
);

export const VendorsIcon = ({ color = "#9ca3af", size = 24 }) => (
    <View style={{ width: size, height: size, position: 'relative' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.7,
            backgroundColor: color,
            borderRadius: 2,
            position: 'absolute',
            bottom: 0,
            left: size * 0.1
        }} />
        <View style={{
            width: size * 0.4,
            height: size * 0.15,
            backgroundColor: color,
            borderRadius: 2,
            position: 'absolute',
            top: size * 0.15,
            left: size * 0.3
        }} />
    </View>
);
