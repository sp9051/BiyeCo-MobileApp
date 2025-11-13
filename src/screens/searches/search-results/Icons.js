import React from 'react';
import { View } from 'react-native';

export const ChevronLeftIcon = ({ color = "#4a3370", size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 12,
            height: 12,
            borderLeftWidth: 2,
            borderBottomWidth: 2,
            borderColor: color,
            transform: [{ rotate: '45deg' }],
            marginLeft: 3
        }} />
    </View>
);

export const MenuDotsIcon = ({ color = "#5e4a8b", size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 }}>
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color }} />
    </View>
);

export const CheckIcon = ({ color = "#ffffff", size = 14 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 8,
            height: 4,
            borderLeftWidth: 2,
            borderBottomWidth: 2,
            borderColor: color,
            transform: [{ rotate: '-45deg' }],
            marginTop: -2,
            marginLeft: 1
        }} />
    </View>
);

export const EducationIcon = ({ color = "#5e4a8b", size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 16,
            height: 12,
            backgroundColor: color,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
        }} />
        <View style={{
            width: 12,
            height: 8,
            backgroundColor: color,
            marginTop: -2,
            borderRadius: 1
        }} />
        <View style={{
            width: 6,
            height: 4,
            backgroundColor: color,
            marginTop: -1,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3
        }} />
    </View>
);

export const HeartIcon = ({ color = "#5e4a8b", size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 16,
            height: 14,
            backgroundColor: color,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            transform: [{ rotate: '45deg' }]
        }} />
        <View style={{
            width: 16,
            height: 14,
            backgroundColor: color,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            position: 'absolute',
            transform: [{ rotate: '-45deg' }]
        }} />
    </View>
);

export const LocationIcon = ({ color = "#5e4a8b", size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 14,
            height: 18,
            backgroundColor: color,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0
        }} />
        <View style={{
            width: 6,
            height: 6,
            backgroundColor: '#ffffff',
            borderRadius: 3,
            position: 'absolute',
            top: 6
        }} />
    </View>
);

export const MoreDotsIcon = ({ color = "#b8b8b8", size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6 }}>
        <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: color }} />
        <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: color }} />
        <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: color }} />
    </View>
);
