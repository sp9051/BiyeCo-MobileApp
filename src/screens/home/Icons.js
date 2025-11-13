import React from 'react';
import { View } from 'react-native';

export const HamburgerIcon = ({ color = '#5a3d7a', size = 24 }) => (
    <View style={{ width: size, height: size * 0.83, justifyContent: 'space-between' }}>
        <View style={{ width: '100%', height: 3, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: '100%', height: 3, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: '100%', height: 3, backgroundColor: color, borderRadius: 2 }} />
    </View>
);

export const SearchIcon = ({ color = '#6c757d', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: color,
        }} />
        <View style={{
            position: 'absolute',
            bottom: 2,
            right: 2,
            width: 8,
            height: 2,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
        }} />
    </View>
);

export const NotificationIcon = ({ color = '#c2b8d4', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 18,
            height: 20,
            backgroundColor: color,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
        }} />
        <View style={{
            position: 'absolute',
            bottom: 2,
            width: 8,
            height: 3,
            backgroundColor: color,
            borderRadius: 2,
        }} />
    </View>
);

export const UserIcon = ({ color = 'rgba(255, 255, 255, 0.8)', size = 40 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.4,
            height: size * 0.4,
            borderRadius: size * 0.2,
            backgroundColor: color,
            marginBottom: 2,
        }} />
        <View style={{
            width: size * 0.8,
            height: size * 0.4,
            backgroundColor: color,
            borderTopLeftRadius: size * 0.4,
            borderTopRightRadius: size * 0.4,
        }} />
    </View>
);

export const VerifiedIcon = ({ size = 20 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size,
            height: size,
            backgroundColor: '#7c5fa6',
            borderRadius: size / 2,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                width: size * 0.6,
                height: size * 0.3,
                borderLeftWidth: 2,
                borderBottomWidth: 2,
                borderColor: 'white',
                transform: [{ rotate: '-45deg' }],
                marginTop: -2,
            }} />
        </View>
    </View>
);

export const EditIcon = ({ color = '#5a3d7a', size = 20 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.8,
            backgroundColor: color,
            transform: [{ rotate: '45deg' }],
        }} />
    </View>
);

export const StarIcon = ({ color = 'white', size = 20, filled = false }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: size * 0.3,
            borderRightWidth: size * 0.3,
            borderBottomWidth: size * 0.7,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: filled ? '#5a3d7a' : color,
        }} />
    </View>
);

export const HomeIcon = ({ color = '#5a3d7a', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            marginTop: size * 0.2,
        }} />
        <View style={{
            position: 'absolute',
            top: 0,
            width: 0,
            height: 0,
            borderLeftWidth: size * 0.5,
            borderRightWidth: size * 0.5,
            borderBottomWidth: size * 0.4,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: color,
        }} />
    </View>
);

export const HeartIcon = ({ color = '#868e96', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            borderTopLeftRadius: size * 0.4,
            borderTopRightRadius: size * 0.4,
            transform: [{ rotate: '45deg' }],
        }} />
    </View>
);

export const MailIcon = ({ color = '#868e96', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            borderRadius: 2,
        }} />
    </View>
);

export const ChatIcon = ({ color = '#868e96', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            borderRadius: 4,
        }} />
    </View>
);

export const VendorIcon = ({ color = '#868e96', size = 24 }) => (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
            width: size * 0.8,
            height: size * 0.6,
            backgroundColor: color,
            borderRadius: 2,
        }} />
    </View>
);

export const FacebookIcon = ({ size = 28 }) => (
    <View style={{ width: size, height: size, backgroundColor: '#1877F2', borderRadius: size / 2 }} />
);

export const InstagramIcon = ({ size = 28 }) => (
    <View style={{ width: size, height: size, backgroundColor: '#E4405F', borderRadius: size / 2 }} />
);

export const TikTokIcon = ({ size = 28 }) => (
    <View style={{ width: size, height: size, backgroundColor: '#000000', borderRadius: size / 2 }} />
);

export const YouTubeIcon = ({ size = 28 }) => (
    <View style={{ width: size, height: size, backgroundColor: '#FF0000', borderRadius: size / 2 }} />
);
