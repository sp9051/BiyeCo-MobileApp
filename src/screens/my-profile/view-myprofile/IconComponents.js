import React from 'react';
import { View } from 'react-native';

export const ChevronLeftIcon = ({ size = 24, color = 'white' }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.4,
            height: size * 0.4,
            borderLeftWidth: 2,
            borderTopWidth: 2,
            borderColor: color,
            transform: [{ rotate: '-45deg' }],
            marginRight: size * 0.1
        }} />
    </View>
);

export const MoreVerticalIcon = ({ size = 24, color = 'white' }) => (
    <View style={{ width: size, height: size, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 4 }}>
        <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: color }} />
        <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: color }} />
        <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: color }} />
    </View>
);

export const UserIcon = ({ size = 50, color = '#7C4DFF' }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.4,
            height: size * 0.4,
            borderRadius: size * 0.2,
            backgroundColor: color,
            marginBottom: size * 0.1
        }} />
        <View style={{
            width: size * 0.8,
            height: size * 0.3,
            backgroundColor: color,
            borderTopLeftRadius: size * 0.4,
            borderTopRightRadius: size * 0.4
        }} />
    </View>
);

export const CheckIcon = ({ size = 16, color = 'white' }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.3,
            height: size * 0.6,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderColor: color,
            transform: [{ rotate: '45deg' }],
            marginTop: -size * 0.1,
            marginLeft: size * 0.1
        }} />
    </View>
);

export const LocationIcon = ({ size = 16, color = 'rgba(255, 255, 255, 0.8)' }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.7,
            height: size * 0.9,
            borderRadius: size * 0.35,
            borderWidth: 2,
            borderColor: color,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            transform: [{ rotate: '45deg' }]
        }} />
        <View style={{
            position: 'absolute',
            width: size * 0.25,
            height: size * 0.25,
            borderRadius: size * 0.125,
            backgroundColor: color,
            top: size * 0.2
        }} />
    </View>
);

export const EditIcon = ({ size = 20, color = 'white' }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.6,
            height: size * 0.1,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
            marginTop: size * 0.2
        }} />
        <View style={{
            position: 'absolute',
            width: size * 0.15,
            height: size * 0.15,
            backgroundColor: color,
            top: size * 0.1,
            right: size * 0.1
        }} />
    </View>
);

export const StarIcon = ({ size = 20, color = 'white' }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: size * 0.2,
            borderRightWidth: size * 0.2,
            borderBottomWidth: size * 0.3,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: color,
            marginBottom: -size * 0.1
        }} />
        <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: size * 0.2,
            borderRightWidth: size * 0.2,
            borderTopWidth: size * 0.3,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: color,
            transform: [{ rotate: '180deg' }]
        }} />
    </View>
);
